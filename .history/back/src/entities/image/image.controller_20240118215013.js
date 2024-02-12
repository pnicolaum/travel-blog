const fs = require('fs');
const path = require('path');

const uploadImage = (req, res) => {
    // Si llegamos aquí, la imagen se ha subido correctamente
    res.json({ message: 'Imagen subida con éxito' });
};

const getImages = (req, res) => {
    const uploadDirectory = '../uploads';

    fs.readdir(uploadDirectory, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const imageNames = files.map(file => path.basename(file));
        res.status(200).json({ images: imageNames });
    });
};

module.exports = {
    uploadImage,
    getImages
};
