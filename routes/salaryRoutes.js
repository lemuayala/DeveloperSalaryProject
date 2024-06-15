const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salaryController");

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Salary:
//  *       $ref: '#/components/schemas/Salary'
//  */

/**
 * @swagger
 * /api/salaries:
 *   post:
 *     summary: Crear un nuevo salario de desarrollador
 *     tags: [Salaries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Salary'
 *     responses:
 *       201:
 *         description: Salario creado exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", salaryController.createSalary);

/**
 * @swagger
 * /api/salaries:
 *   get:
 *     summary: Obtener todos los salarios de desarrolladores
 *     tags: [Salaries]
 *     responses:
 *       200:
 *         description: Lista de salarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Salary'
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", salaryController.getSalaries);

/**
 * @swagger
 * /api/salaries/{id}:
 *   get:
 *     summary: Obtener un salario de desarrollador por ID
 *     tags: [Salaries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del salario
 *     responses:
 *       200:
 *         description: Detalle del salario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Salary'
 *       404:
 *         description: Salario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", salaryController.getSalaryById);

/**
 * @swagger
 * /api/salaries/{id}:
 *   put:
 *     summary: Actualizar un salario de desarrollador
 *     tags: [Salaries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del salario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Salary'
 *     responses:
 *       200:
 *         description: Salario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Salary'
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", salaryController.updateSalary);

/**
 * @swagger
 * /api/salaries/{id}:
 *   delete:
 *     summary: Eliminar un salario de desarrollador
 *     tags: [Salaries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del salario
 *     responses:
 *       204:
 *         description: Salario eliminado exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", salaryController.deleteSalary);

module.exports = router;
