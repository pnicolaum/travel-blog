const { Router } = require("express");
const controller = require('./image.controller.js');


const router = Router();

router.post("/upload", upload.single("image"), controller.addBlogs);


module.exports = router;

// const UploadMiddleware = require('./image.middleware.js');

// router.post('/upload', UploadMiddleware.single('image'), controller.uploadImage);
// router.post('/upload', upload.single("image"), controller.uploadImage);