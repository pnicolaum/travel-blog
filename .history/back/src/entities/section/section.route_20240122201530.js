const { Router } = require("express");
const controller = require('./section.controller.js');

const router = Router();

router.get("/", controller.getSections);
router.post("/", controller.addSections);

router.get("/:keyword", controller.getSectionByKeyword);

module.exports = router;