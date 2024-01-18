const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/image.controller');
const UploadMiddleware = require('../middleware/upload.middleware');

router.post('/upload', UploadMiddleware.single('image'), ImageController.uploadImage);

module.exports = router;