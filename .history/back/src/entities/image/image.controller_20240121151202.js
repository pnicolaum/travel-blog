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

/*
getImageByName = (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join('./uploads', imageName);

    fs.readFile(imagePath, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar la imagen' });
        }
        // Determina el tipo de contenido adecuado (puede variar según el tipo de imagen)
        const contentType = 'image/jpg';  // Cambia según el tipo de imagen que estás manejando

        // Configura los encabezados de la respuesta
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Length', data.length);

        // Envía el contenido de la imagen como respuesta
        res.end(data);
    });
}*/

// const getImgByUrl = (req, res) => {

//     res.dowmload('../../uploads' + req.params.path)
// }

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
    getImgByUrl,
    // getImageByName,
    deleteImage
};
