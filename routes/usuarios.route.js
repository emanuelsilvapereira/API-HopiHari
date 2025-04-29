const express = require("express");
const router = express.Router();
const usuariosCotroller = require("../controllers/usuarios.controller");

router.post( "/login", ()=>(console.log("Rota de Login")));
router.put( "/:id", usuariosCotroller.atualizarUsuario);
router.post( "/", usuariosCotroller.cadastrarUsuario);



module.exports = router;