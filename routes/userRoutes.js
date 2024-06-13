const express = require("express");
const {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/userController");
const router = express.Router();

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear usuario
 *     description: Crea un nuevo usuario.
 *     requestBody:
 *       description: Datos del nuevo usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               cargo:
 *                 type: string
 *               salario:
 *                 type: number
 *             required:
 *               - nombre
 *               - apellido
 *               - salario
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 */
router.post("/usuarios", crearUsuario);

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Retorna una lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios recuperada exitosamente
 *       404:
 *         description: No se encontraron usuarios
 */
router.get("/usuarios", obtenerUsuarios);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     description: Actualiza un usuario existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del usuario a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados del usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               cargo:
 *                 type: string
 *               salario:
 *                 type: number
 *             required:
 *               - nombre
 *               - apellido
 *               - salario
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 *       404:
 *         description: Usuario no encontrado
 */
router.put("/usuarios/:id", actualizarUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     description: Elimina un usuario existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del usuario a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete("/usuarios/:id", eliminarUsuario);

module.exports = router;
