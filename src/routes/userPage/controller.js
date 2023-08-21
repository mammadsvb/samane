const Conteroller = require("../controller");
const multer = require("multer");
const mkdir = require('mkdirp');
const fs = require("fs")
module.exports = new class extends Conteroller{

    loadPage(req,res){
        console.log(fs.readdirSync("./public/uploads"))
        // console.log(req.user)
        res.render("user",{videos:fs.readdirSync("./public/uploads")});
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
              cb(null, Date.now() + '-' + file.originalname )
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
        res.redirect("login")
    }

    getvideoname(req,res){
        req.video = Object.keys(req.body).pop()
        res.redirect("user");
    }
    
}