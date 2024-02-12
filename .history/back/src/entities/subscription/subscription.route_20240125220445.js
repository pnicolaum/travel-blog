const { Router } = require("express");
const controller = require('./subscription.controller.js');

const router = Router();

router.get("/", controller.getSubscriptions);
router.post("/", controller.addSubscriptions);

router.get("/mail/:mail", controller.getMailByMail);

router.get("/:id", controller.getMailById);
router.delete("/:id", controller.removeSubscription);

module.exports = router;