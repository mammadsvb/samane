const {validationResult} = require("express-validator");

module.exports = class {

    validationBody(req,res,next){

        const result = validationResult(req);
        
        if(!result.isEmpty())
        {
            const err = result.array();
            const msg = [];
            err.forEach(e => msg.push(e.msg));
        }
        next();
    }

}

