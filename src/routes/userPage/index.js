const express = require("express");
const router = express.Router();
const controller = require("./controller");
// const uploadUserProfile = require('../../middlewares/upload');

router.get('/',
controller.loadPage.bind(controller));

router.post("/",
controller.getFile().single("filename"),
controller.sayHello.bind(controller));

router.delete('/',
controller.logout.bind(controller))

router.post('/video',
controller.getvideoname.bind(controller))

module.exports = router;