const express = require("express");
const addExchangeData = require("../controllers/exchangeData.controller");
const router = express.Router();
router.route("/add").post(addExchangeData)
module.exports = router;