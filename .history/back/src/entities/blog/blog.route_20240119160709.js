const { Router } = require("express");
const controller = require('./blog.controller.js');

const router = Router();

router.get("/", controller.getBlogs);
router.post("/", controller.addBlogs);
router.get("/:title", controller.getBlogByTitle)
router.get("/recent-blogs", controller.getRecentBlogs);



router.get("/:id", controller.getBlogById);
router.delete("/:id", controller.removeBlog);




module.exports = router;