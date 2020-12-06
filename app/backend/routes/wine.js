const express = require("express");

const wineController = require("../controllers/wine");

const router = express.Router();

router.get("/", wineController.getWineMark);

module.exports = router;
