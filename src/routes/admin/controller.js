const Controller = require("../controller");

module.exports = new class extends Controller{

    loadPage(req,res){
        res.render("admin")
    }

}