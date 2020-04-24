const express = require("express");
const ctrl = require("../controllers/apiController");

const router = express.Router();

// The runs the code stored in `controllers/pageController.js`
router.get("/", ctrl.list);
router.get("/:id", ctrl.detail);

module.exports = router;
