const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/thingController");

router.get("/", ctrl.list);
router.get("/:id", ctrl.detail);

module.exports = router;
