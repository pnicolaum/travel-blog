const { Router } = require("express");
const controller = require('./blog.controller.ts');

const router = Router();

router.get("/", controller.getUsers);


module.exports = router;