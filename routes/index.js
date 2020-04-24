const express = require("express");
const ctrl = require("../controllers/pageController");

const router = express.Router();

// The runs the code stored in `controllers/pageController.js`
router.get("/", ctrl.homePage);
router.get("/about", ctrl.aboutPage);
router.get("/contact", ctrl.contactPage);

module.exports = router;
