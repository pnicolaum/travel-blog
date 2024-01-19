const { Router } = require("express");
const controller = require('./image.controller.js');
const multer = require('multer');
const path = require('path');
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

// Ruta para subir una imagen
router.post('/upload', upload.single('image'), controller.uploadImage);
router.get('/get-images', controller.getImages);

module.exports = router;
