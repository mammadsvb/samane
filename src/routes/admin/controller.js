const Controller = require("../controller");

module.exports = new class extends Controller{

    async loadPage(req,res){
        const users= await this.User.find();
        console.log(users)
        res.render("admin",{users:users})
    }

    async removeUser(req,res){
        await this.User.findByIdAndRemove(req.params.id);

        return res.redirect("/admin")
    }

}