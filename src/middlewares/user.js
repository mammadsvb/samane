const User = require("../models/User")
const jwt = require("jsonwebtoken");
const config = require("config");

async function isLoggedin(req,res,next){

    const token = req.signedCookies.id;

    if(!token){
        req.flash("errors","first login");
        return res.redirect("login");
    }

    try{
        const decode = jwt.verify(token,config.get("token-key"));

        const user = await User.findById(decode.id);
        req.user = user;
        next();
    }catch(err){
        req.flash("errors","access denied.");
        console.error(err);
        res.redirect("login");
    }
}

async function loginPage(req,res,next){

    const token = req.signedCookies.id;

    if(!token){
        return next();
    }

    try{
        const decode = jwt.verify(token,config.get("token-key"));

        const user = await User.findById(decode.id);
        req.user = user;
        if(user.isAdmin)
            return res.redirect("admin");
        res.redirect("user");
    }catch(err){
        next();
    }
}

function isAdmin(req,res,next){
    if(!req.user.isAdmin) {
        req.flash("errors","access debied.");
        return res.redirect("login");
    }
    next();
}

module.exports = {
    isLoggedin,
    loginPage,
    isAdmin
}