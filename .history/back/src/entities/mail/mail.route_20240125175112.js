const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/enviar-correo', contactController.enviarCorreo);

module.exports = router;
