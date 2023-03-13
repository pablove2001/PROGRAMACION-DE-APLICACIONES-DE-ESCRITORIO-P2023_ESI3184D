const path = require('path');
const express = require('express');
const { auth } = require('./src/middlewares');


function cargarHome(req, res) {
    res.render('home');
}


module.exports = function (app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/', auth, cargarHome);

    app.get('*', function (req, res) {
        res.status(404).send('Pagina no encontrada')
    })
}


