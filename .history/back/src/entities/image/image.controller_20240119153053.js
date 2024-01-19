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

const deleteImage = (req, res) => {

}

module.exports = {
    uploadImage,
    getImages,
    deleteImage
};
