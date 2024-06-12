const express = require("express");
const {
  login,
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/userController");
const { verifyToken } = require("../config/auth");

const router = express.Router();

router.post("/usuarios", verifyToken, crearUsuario);
router.get("/usuarios", verifyToken, obtenerUsuarios);
router.put("/usuarios/:id", verifyToken, actualizarUsuario);
router.delete("/usuarios/:id", verifyToken, eliminarUsuario);
router.post("/login", login);

module.exports = router;
