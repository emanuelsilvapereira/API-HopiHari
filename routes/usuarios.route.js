const express = require("express");
const router = express.Router();
const usuariosCotroller = require("../controllers/usuarios.controller");
const login = require("../middleware/usuários.middleware");

router.post( "/login", usuariosCotroller.login);
router.put( "/", login.required, usuariosCotroller.atualizarUsuario);
router.post( "/", usuariosCotroller.cadastrarUsuario);


module.exports = router;