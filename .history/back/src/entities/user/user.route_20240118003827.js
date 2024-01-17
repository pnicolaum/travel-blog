const { Router } = require("express");
const controller = require('./user.controller.js');

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUsers);

// router.post("/login", controller.loginUser);

router.post("/login", controller.getCredentials);

router.get("/:id", controller.getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.removeUser);

module.exports = router;