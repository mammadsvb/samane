const express = require("express");
const router = express.Router();

const {isLoggedin,loginPage} = require('../middlewares/user')
const registerRouter = require("./register");
const loginRouter = require("./login");
const adminRouter = require("./admin")

router.use('/register',registerRouter);
router.use("/login",loginPage,loginRouter);
router.use("/admin",isLoggedin,adminRouter)


module.exports = router;