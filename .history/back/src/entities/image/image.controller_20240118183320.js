const pool = require('../../../db.js');
const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads'); // La carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {

        createVerify(null, path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });


const uploadImage = (req, res) => {
    // Si llegamos aquí, la imagen se ha subido correctamente
    res.json({ message: 'Imagen subida con éxito' });
};

module.exports = {
    uploadImage,
};

// const extname = path.extname(file.originalname);
// const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
// cb(null, file.fieldname + '-' + uniqueSuffix + extname);