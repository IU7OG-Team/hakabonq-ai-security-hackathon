const express = require("express");

const wineController = require("../controllers/wine");

const router = express.Router();

router.post("/", wineController.getWineMark);

module.exports = router;
