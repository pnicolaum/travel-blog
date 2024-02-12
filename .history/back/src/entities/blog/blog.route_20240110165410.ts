const { Router } = require("express");
const controller = require('./blog.controller.ts');

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUsers);

router.get("/:id", controller.getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.removeUser);

module.exports = router;