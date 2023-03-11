const router = require('express').Router();
const rutasTareas = require('./tareas');
const { auth } = require('./../middlewares');

router.use('/tareas', auth, rutasTareas);

module.exports = router;