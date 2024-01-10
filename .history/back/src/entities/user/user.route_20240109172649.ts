const { Router } = require("express");
const controller = require('./user.controller.ts');

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUsers);

router.get("/:id", controller.getUserById);


module.exports = router;