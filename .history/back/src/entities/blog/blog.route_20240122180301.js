const { Router } = require("express");
const controller = require('./blog.controller.js');

const router = Router();

router.get("/recent-blogs", controller.getRecentBlogs);

router.get("/:id", controller.getBlogById);
router.put("/:id", controller.updateBlogById);
router.delete("/:id", controller.removeBlog);

router.get("/", controller.getBlogs);
router.post("/", controller.addBlogs);



router.get("/:keyword", controller.getBlogByKeywod);





module.exports = router;