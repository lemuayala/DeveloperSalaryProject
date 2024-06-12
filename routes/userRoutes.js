const express = require("express");
const {
  crearUsuario,
  obtenerUsuarios,
} = require("../controllers/userController");
const router = express.Router();

router.post("/usuarios", crearUsuario);
router.get("/usuarios", obtenerUsuarios);

module.exports = router;
