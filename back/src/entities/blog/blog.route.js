const { Router } = require("express");
const controller = require('./blog.controller.js');

const router = Router();


router.get("/", controller.getBlogs);
router.post("/", controller.addBlogs);

router.get("/recent-blogs", controller.getRecentBlogs);
router.get("/filter", controller.getFilter);

router.get("/get-keyword/:keyword", controller.getBlogByKeyword);

router.get("/get-id/:id", controller.getBlogById);
router.put("/get-id/:id", controller.updateBlogById);
router.delete("/get-id/:id", controller.removeBlog);

module.exports = router;

