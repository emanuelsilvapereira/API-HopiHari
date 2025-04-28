const express = require("express");
const router = express.Router();

router.post( "/cadastrar", ()=>(console.log("Rota de Cadastro")));

module.exports = router;