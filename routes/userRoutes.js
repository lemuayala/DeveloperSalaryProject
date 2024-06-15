const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
/**
 * @swagger
 * tags:
 *   name: Users
 *   description:
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear usuario
 *     tags: [Users]
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
router.post("/", userController.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     description: Retorna una lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios recuperada exitosamente
 *       404:
 *         description: No se encontraron usuarios
 */
router.get("/", userController.getUsers);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Users]
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
router.put("//:id", userController.getUserById);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Users]
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
router.delete("//:id", userController.deleteUser);

module.exports = router;
