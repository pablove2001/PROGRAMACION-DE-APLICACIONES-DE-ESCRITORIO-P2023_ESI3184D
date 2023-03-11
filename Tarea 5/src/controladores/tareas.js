const { response } = require('express');
const Tarea = require('./../modelos/tarea')

function getTareas(req, res) {
    Tarea.find().then(tareas => {
        res.json(tareas);
    }).catch(err => {
        console.error(err);
        res.status(400).send('algo salio mal');
    });
}

function getTarea(req, res) {
    Tarea.findOne({ _id: req.params.id }).then(tarea => {
        res.status(200).json(tarea);
    }).catch(err => {
        console.error(err);
        res.status(404).send('Tarea no encontrada');
    });
}

function postTarea(req, res) {
    try {
        const tarea = new Tarea({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
        });
        tarea.save().then(nuevaTarea => {
            res.status(200).json(nuevaTarea);
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            message: 'Datos de entrada inválidos'
        });
    }
}

function putTarea(req, res) {
    Tarea.findById(req.params.id).then(tarea => {
        if (!tarea) {
            return res.status(404).json({ message: 'No se encontró la tarea' });
        }
        tarea.title = req.body.title || tarea.title;
        tarea.description = req.body.description || tarea.description;
        tarea.status = req.body.status || tarea.status;
        tarea.save().then(tareaActualizada => {
            res.status(200).json(tareaActualizada);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error interno del servidor' });
        });
    }).catch(error => {
        console.error(err);
        res.status(400).json({
            message: 'Datos de entrada inválidos'
        });
    });
}

function deleteTarea(req, res) {
    Tarea.findByIdAndDelete(req.params.id).then(tarea => {
        if (!tarea) {
            return res.status(404).json({ message: 'No se encontró la tarea' });
        }
        res.status(204).json({ message: 'Tarea eliminada correctamente', tarea: tarea });
    }).catch(error => {
        res.status(400).json({ message: 'Algo salio mal' });
    });
}

module.exports = { getTareas, getTarea, postTarea, putTarea, deleteTarea };