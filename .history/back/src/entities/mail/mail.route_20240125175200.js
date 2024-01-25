const { Router } = require("express");
const controller = require('./mail.controller.js');
const router = Router();



router.post('/send-mail', controller.enviarCorreo);

module.exports = router;
