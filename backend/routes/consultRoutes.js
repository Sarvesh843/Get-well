const express = require("express");
const router = express.Router();
const { consultation, prescription } = require("../controllers/consultController");


router.post("/consult", consultation);
router.post("/priscribe", prescription);


module.exports = router;
