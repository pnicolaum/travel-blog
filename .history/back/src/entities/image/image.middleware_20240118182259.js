const multer = require('multer');
const path = require('path');

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads'); // La carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + extname);
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
