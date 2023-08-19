const {check} = require("express-validator")

module.exports = new class{

    validator(){
        return[
            check("username","username can't be empty").notEmpty(),
            check("password","password can't be empty").notEmpty()
        ]
    }


}