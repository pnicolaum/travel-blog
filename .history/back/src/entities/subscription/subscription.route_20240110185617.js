const { Router } = require("express");
const controller = require('./subscription.controller.js');

const router = Router();

router.get("/", controller.getSubscriptions);

module.exports = router;