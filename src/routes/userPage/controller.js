const Conteroller = require("../controller");
const multer = require("multer");
const mkdir = require('mkdirp');

module.exports = new class extends Conteroller{

    loadPage(req,res){
        res.render("user");
    }

    getFile(){
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                // mkdir('./public/uploads').then(made=>{
                //     cb(null, './public/uploads');
                // })
                cb(null, './public/uploads');
            },
            filename: function (req, file, cb) {
              cb(null, Date.now() + '-' + file.filename )
            }
        })
           
        const upload = multer({ storage: storage });
          
          return upload;      
    }

    sayHello(req,res){
        console.log(req.file);
        res.redirect("user");
    }

    logout(req,res){
        res.clearCookie('id');
        res.redirect("login");
    }
    
}