const express = require("express");

const { getSoldProducts, addToSold } = require("../controllers/sold");

const router = express.Router();

router.get("/", getSoldProducts);
router.post("/", addToSold);

module.exports = router;
