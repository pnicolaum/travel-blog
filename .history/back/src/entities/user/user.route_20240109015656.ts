const { Router } = require("express");
const controller = require("./user.controller.ts");
const router = Router();

router.get('/', (req, res) => {
    res.send("Using api route ");
});

module.exports = router;