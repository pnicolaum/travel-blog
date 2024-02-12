const { Router } = require("express");
const controller = require('./blog.controller.js');

const router = Router();


router.get("/", controller.getBlogs);
router.post("/", controller.addBlogs);

router.get("/recent-blogs", controller.getRecentBlogs);

router.get("/:keyword", controller.getBlogByKeywod);
router.put("/:keyword", controller.updateBlog);

router.get("/:id", controller.getBlogById);
router.delete("/:id", controller.removeBlog);


module.exports = router;