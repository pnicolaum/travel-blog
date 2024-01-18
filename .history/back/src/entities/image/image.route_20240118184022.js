const { Router } = require("express");
const controller = require('./image.controller.js');
const multer = require('multer');
const path = require('path');

const router = Router();


const uploadDirectory = './uploads';

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // La carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + extname);
    },
});

const upload = multer({ storage: storage });

// Ruta para subir una imagen
router.post('/upload', upload.single('image'), controller.uploadImage);

module.exports = router;
