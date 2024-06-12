const express = require("express");
const {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/userController");
const router = express.Router();

router.post("/usuarios", crearUsuario);
router.get("/usuarios", obtenerUsuarios);
router.put("/usuarios/:id", actualizarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

module.exports = router;
