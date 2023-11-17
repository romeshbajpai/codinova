const express = require("express");
const {addExchangeIcon, getExchangeIcon} = require("../controllers/exchageIcon.controller");
const router = express.Router();
router.route("/addIcon").post(addExchangeIcon)
router.route("").get(getExchangeIcon)
module.exports = router;