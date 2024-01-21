const { Router } = require("express");
const controller = require('./section.controller.js');

const router = Router();

router.get("/", controller.getSections);
router.post("/", controller.addSections);

module.exports = router;