const nodemailer = require('nodemailer');
require("dotenv").config();

sendMail = (req, res) => {
    const { name, mail, text } = req.body;

    // Configura nodemailer con tus credenciales de correo electrónico
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_CLAVE,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nCorreo: ${mail}\nMensaje: ${text}`,
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

confirmationMail = (req, res) => {
    const { mail, code } = req.body;
    console.log(mail);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_CLAVE,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: mail,
        subject: 'Mail confirmación suscripción a Destinos Compartidos',
        text: `Buenas, tu codigo de confirmacion es: ${code}`,
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
    sendMail,
    confirmationMail
}