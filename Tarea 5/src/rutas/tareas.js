const express = require('express');
const router = express.Router();
const { getTareas, getTarea, postTarea, putTarea, deleteTarea } = require('./../controladores/tareas');

/**
 * @swagger
 * /tareas:
 *   get:
 *     description: Obtiene una lista de todas las tareas
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Lista de tareas
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 */
router.get('', getTareas);

/**
 * @swagger
 * /tareas/{id}:
 *   get:
 *     description: Obtiene una tarea por su ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la tarea a buscar
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *       404:
 *         description: Tarea no encontrada
 */
router.get('/:id', getTarea);

/**
 * @swagger
 * /tareas:
 *   post:
 *     description: Crea una nueva tarea
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: tarea
 *         description: Objeto JSON que contiene la información de la tarea
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *     responses:
 *       201:
 *         description: Tarea creada con éxito
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *       400:
 *         description: Datos de entrada inválidos
 */
router.post('', express.json(), postTarea);

/**
 * @swagger
 * /tareas/{id}:
 *   put:
 *     description: Actualiza una tarea existente
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Identificador de la tarea a actualizar
 *         in: path
 *         required: true
 *         type: string
 *       - in: body
 *         name: tarea
 *         description: Objeto JSON que contiene la información actualizada de la tarea
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *     responses:
 *       200:
 *         description: Tarea actualizada con éxito
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put('/:id', express.json(), putTarea);

/**
 * @swagger
 * /tareas/{id}:
 *   delete:
 *     description: Elimina una tarea existente
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Identificador de la tarea a eliminar
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Tarea eliminada con éxito
 *       404:
 *         description: Tarea no encontrada
 *       400:
 *         description: Algo salio mal
 */
router.delete('/:id', deleteTarea);


module.exports = router;