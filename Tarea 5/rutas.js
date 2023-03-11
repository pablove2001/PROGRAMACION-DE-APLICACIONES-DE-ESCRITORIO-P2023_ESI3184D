const path = require('path');
const { auth } = require('./src/middlewares');


module.exports = function (app) {
    app.get('/', auth, function (req, res) {
        res.status(200).json({ message: 'Home page' });
    });

    app.get('*', function (req, res) {
        res.status(404).send('Pagina no encontrada')
    })
}


