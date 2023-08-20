const express = require("express");
const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login");
const adminRouter = require("./admin")

router.use('/register',registerRouter);
router.use("/login",loginRouter);
router.use("/admin",adminRouter)


module.exports = router;