const Conteroller = require("../controller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = new class extends Conteroller {

    loadPage(req,res){
        
        res.render("login",{err:req.flash("errors")});
    }

    async login(req,res){

        try{  
            let {username,password} = req.body;
            if(!username | !password)
                return res.redirect("login");

            const user = await this.User.findOne({username:username});

            if(!user){
                req.flash("errors","username or password is wrong.");
                return res.redirect("login");
            }

            const result = await bcrypt.compare(password,user.password);

            if(!result)
            {
                req.flash("errors","username or password is wrong.");
                return res.redirect("login");     
            }

            const token = jwt.sign({id:user.id},config.get("token-key"));

            res.cookie('id',token,{signed : true , maxAge: 24*60*60*1000});
            
            if(user.isAdmin)
               return res.redirect("admin");

            res.redirect("user");

        }catch(err){
            console.error(err);
        }
    }
}