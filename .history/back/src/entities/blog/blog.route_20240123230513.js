const { Router } = require("express");
const controller = require('./blog.controller.js');

const router = Router();


router.get("/", controller.getBlogs);
router.post("/", controller.addBlogs);

router.get("/recent-blogs", controller.getRecentBlogs);

router.get("/get-keyword/:keyword", controller.getBlogByKeyword);

router.get("/continent/:continent", controller.getBlogsByContinent);
router.get("/country/:country", controller.getBlogsByCountry);
router.get("/days/:days", controller.getBlogsByDays);

router.get("/get-id/:id", controller.getBlogById);
router.put("/get-id/:id", controller.updateBlogById);
router.delete("/get-id/:id", controller.removeBlog);

module.exports = router;
// router.put("/:id", controller.updateBlogById);
