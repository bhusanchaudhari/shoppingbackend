const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.controller");

router.post("/register", adminController.create);
router.post("/login", adminController.login);

module.exports = router;
