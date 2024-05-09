const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");

//App Routes

//Homepage --------------
router.get("/", mainController.homepage);

//Aboutpage --------------
router.get("/about", mainController.about);

module.exports = router;
