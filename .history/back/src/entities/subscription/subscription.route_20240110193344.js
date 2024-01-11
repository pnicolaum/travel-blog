const { Router } = require("express");
const controller = require('./subscription.controller.js');

const router = Router();

router.get("/", controller.getSubscriptions);
router.post("/", controller.addSubscriptions);

router.get("/:id", controller.getMailById);

module.exports = router;