const Controller = require("../controller");
const bcrypt = require("bcrypt");

module.exports = new class extends Controller{

    loadPage(req,res){
        res.render("register",{err:req.flash("errors")})
    }

    async register(req,res){
    
        try
        {  
            let {firstname,lastname,username,password} = req.body;

            if(!firstname | !lastname | !username | !password )
                return res.redirect("register");

            let user = await this.User.findOne({username:username});

            if(user){
                req.flash("errors","This username has already been chosen");
                return res.redirect("register");
            }

            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password,salt);

            user = new this.User({
                firstname,
                lastname,
                username,
                password
            });

            await user.save();

            res.redirect("register");}
        catch(e){
            console.log(e);
        }
    }
}