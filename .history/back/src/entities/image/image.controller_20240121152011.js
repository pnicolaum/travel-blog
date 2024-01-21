const fs = require('fs');
const path = require('path');

const uploadImage = (req, res) => {
    res.json({ message: 'Imagen subida con éxito' });
};

const getImages = (req, res) => {
    const uploadDirectory = './uploads';

    fs.readdir(uploadDirectory, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const imageNames = files.map(file => path.basename(file));
        res.status(200).json({ images: imageNames });
    });
};


const getImageByName = (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, '../../uploads', imageName); // Ajusta la ruta según la estructura de tu proyecto

    fs.readFile(imagePath, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener la imagen' });
        }

        // Configura los encabezados de la respuesta
        res.setHeader('Content-Type', 'image/jpg');  // Ajusta según el tipo de imagen que estás manejando
        res.setHeader('Content-Length', data.length);

        // Envía el contenido de la imagen como respuesta
        res.end(data);
    });
};

const deleteImage = (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join('./uploads', imageName);

    fs.unlink(imagePath, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar la imagen' });
        }
        res.json({ message: 'Imagen eliminada con éxito' });
    });
}

module.exports = {
    uploadImage,
    getImages,
    getImageByName,
    deleteImage
};
