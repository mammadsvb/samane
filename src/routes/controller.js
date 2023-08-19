const {validationResult} = require("express-validator");
const User = require("../models/User")

module.exports = class {

    constructor(){
        this.User = User;
    }

    validationBody(req,res,next){

        const result = validationResult(req);
        
        if(!result.isEmpty())
        {
            const err = result.array();
            const msg = [];
            err.forEach(e => msg.push(e.msg));
            req.flash("errors",msg)
        }
        next();
    }

}

