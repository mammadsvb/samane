const {check, checkExact} = require("express-validator")

module.exports = new class {
    validator(){
        return[
            check('firstname',"firstname can't be empty").notEmpty(),
            check('lastname',"lastname can't be empty").notEmpty(),
            check('username',"username can't be empty").notEmpty(),
            check('password',"password can't be empty").notEmpty()
        ];
    }
}