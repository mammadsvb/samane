const express = require("express");
const router = express.Router();

const {isLoggedin,loginPage,isAdmin} = require('../middlewares/user');
// const {mid} = require('../middlewares/upload')
const registerRouter = require("./register");
const loginRouter = require("./login");
const userRouter = require("./userPage");
const adminRouter = require("./admin");

router.use('/register',registerRouter);
router.use("/login",loginPage,loginRouter);
router.use("/user",isLoggedin,userRouter);
router.use("/admin",isLoggedin,isAdmin,adminRouter);


module.exports = router;