const Conteroller = require("../controller");

module.exports = new class extends Conteroller {

    loadPage(req,res){
        res.render("login",{err:req.flash("errors")});
    }


}