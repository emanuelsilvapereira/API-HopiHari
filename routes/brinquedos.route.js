    const express = require("express");
    const router = express.Router();
    const login = require("../middleware/usuários.middleware")
    const brinquedosController = require("../controllers/brinquedos.controller");

    router.post('/', 
        login.required,
        login.userRequire,
        brinquedosController.cadastrarBrinquedo
    );

    module.exports = router;