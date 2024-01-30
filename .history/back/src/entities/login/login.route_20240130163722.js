const { Router } = require("express");
const controller = require('./login.controller.js');

const router = Router();


router.get("/login", controller.getLogin);