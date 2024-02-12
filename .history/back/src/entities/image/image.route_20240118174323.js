const { Router } = require("express");
const controller = require('./image.controller.js');
const UploadMiddleware = require('../middleware/upload.middleware');

const router = Router();

router.post('/upload', UploadMiddleware.single('image'), controller.uploadImage);

module.exports = router;