const { Router } = require("express");
const controller = require('./image.controller.js');
const UploadMiddleware = require('./image.middleware.js');

const router = Router();

// router.post('/upload', UploadMiddleware.single('image'), controller.uploadImage);
router.post("/upload", controller.addBlogs);
// router.post('/upload', upload.single("image"), controller.uploadImage);

module.exports = router;