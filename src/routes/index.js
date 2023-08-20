const express = require("express");
const router = express.Router();

const {isLoggedin} = require('../middlewares/user')
const registerRouter = require("./register");
const loginRouter = require("./login");
const adminRouter = require("./admin")

router.use('/register',registerRouter);
router.use("/login",loginRouter);
router.use("/admin",isLoggedin,adminRouter)


module.exports = router;