const uploadImage = (req, res) => {
    // Si llegamos aquí, la imagen se ha subido correctamente
    res.json({ message: 'Imagen subida con éxito' });
};

module.exports = {
    uploadImage,
};