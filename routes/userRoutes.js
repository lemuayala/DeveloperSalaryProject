const express = require("express");
const { crearUsuario } = require("../controllers/userController");
const router = express.Router();

router.post("/usuarios", crearUsuario);

module.exports = router;
