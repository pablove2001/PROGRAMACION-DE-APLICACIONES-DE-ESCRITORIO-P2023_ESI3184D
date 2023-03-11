const express = require('express');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const rutas = require('./rutas');
const rutas2 = require('./src/rutas');
const swaggerConf = require('./swagger.config');
const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config();

const app = express();

const mongoUrl = process.env.MONGO_URL;

const port = process.env.PORT || 3000;

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

const swaggerDocs = swaggerJSDoc(swaggerConf);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use('', rutas2);
rutas(app);





mongoose.connect(mongoUrl).then(() => {
    console.log('Se conecto correctamente a la base de datos');

    app.listen(port, function () {
        console.log(mongoUrl);
        console.log(`App is running in port http://localhost:${port}/?token=123`);
    });


}).catch(err => {
    console.log('No se pudo conectar a la ase de datos', err);
});


