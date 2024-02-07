const { Router } = require("express");
const controller = require('./image.controller.js');
const multer = require('multer');
const fs = require('fs');

const router = Router();

const uploadDirectory = './uploads';
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });


router.post('/upload', upload.single('image'), controller.uploadImage);
router.get('/get-images', controller.getImages);

router.delete('/delete-image/:imageName', controller.deleteImage);

module.exports = router;
