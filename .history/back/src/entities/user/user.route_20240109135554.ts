const { Router } = require("express");
const controller = require('./user.controller.ts');

const router = Router();

router.get('/', controller.getUsers);

router.get('/:id', controller.getUsers);


module.exports = router;