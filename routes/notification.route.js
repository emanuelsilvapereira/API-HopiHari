const express = require("express");
const login = require("../middleware/usuários.middleware")
const router = express.Router();
const notificationController = require("../controllers/notification.controller");


router.get("/",
    login.required, notificationController.getNotificacoes);

module.exports = router;