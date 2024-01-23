const { Router } = require("express");
const controller = require('./section.controller.js');

const router = Router();

router.get("/", controller.getSections);
router.post("/", controller.addSections);

router.get("/:keyword", controller.getSectionByKeyword);

router.get("/get-blogid/:blogid", controller.getSectionByBlogId);

router.get("/get-id/:id", controller.getSectionById);
router.put("/get-id/:id", controller.updateSectionById);
router.delete("/get-id/:id", controller.removeSection);

module.exports = router;