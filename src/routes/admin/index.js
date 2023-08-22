const express = require("express")
const router = express.Router();

const controller = require("./controller");

router.get("/",
controller.loadPage.bind(controller));

router.delete("/:id",
controller.removeUser.bind(controller));

module.exports = router;
