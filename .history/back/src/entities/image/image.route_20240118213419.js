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
        // const extname = path.extname(file.originalname);
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // cb(null, file.fieldname + '-' + uniqueSuffix + extname);
        // const extname = path.extname(file.originalname);
        const fileName = file.originalname.split('.')[0]; // Usa el nombre original del archivo
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, fileName);
    },

});

const upload = multer({ storage: storage });

// Ruta para subir una imagen
router.post('/upload', upload.single('image'), controller.uploadImage);

module.exports = router;
