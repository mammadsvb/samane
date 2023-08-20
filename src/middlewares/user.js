const User = require("../models/User")
const jwt = require("jsonwebtoken");
const config = require("config");

async function isLoggedin(req,res,next){

    const token = req.signedCookies.id;
    console.log(token)
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
        req.flash("errors","denied access.");
        console.error(err);
        res.redirect("login");
    }


}

module.exports = {
    isLoggedin
}