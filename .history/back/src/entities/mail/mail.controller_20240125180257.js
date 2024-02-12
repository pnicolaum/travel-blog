const nodemailer = require('nodemailer');
require("dotenv").config();

sendMail = (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    // Configura nodemailer con tus credenciales de correo electrónico
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'MAIL_USERNAME@gmail.com',
            pass: 'MAIL_PASSWORD',
        },
    });

    const mailOptions = {
        from: 'MAIL_USERNAME@gmail.com',
        to: 'MAIL_USERNAME@gmail.com',
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Correo enviado con éxito');
        }
    });
};

module.exports = {
    sendMail
}