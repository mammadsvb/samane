const Conteroller = require("../controller");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const config = require("config");
const fs = require("fs");
const path = require("path");

module.exports = new class extends Conteroller{

    loadPage(req,res){

        res.render("user",{videos:fs.readdirSync("./public/uploads")});
    }

    getFile(){
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {

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
        
        if(Object.keys(req.body).length)
        {
          const videoName = Object.keys(req.body).pop();
          const token = jwt.sign({videoName:videoName},config.get("token-key"));
          res.cookie('videoName',token,{signed : true});

        }
        
        res.redirect("video");
    }
    
    stream(req,res){
        const token = req.signedCookies.videoName;
        if(!token)
            return res.send("ssssssssss")
        
        const decode = jwt.verify(token,config.get('token-key'));

        const videoPath = './public/uploads/' +decode.videoName;
        console.log(videoPath);

        res.render('video',{path:videoPath})
    }

}