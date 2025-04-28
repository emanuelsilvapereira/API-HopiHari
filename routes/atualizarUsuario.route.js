const express = require("express");
const router = express.Router();

router.put( "/atualizar", ()=>(console.log("Rota de Atualização")));

module.exports = router;