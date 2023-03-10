const express = require('express');
const rutas = require('./rutas');
const rutas2 = require('./src/rutas');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', './src/views');

const port = 3000;


app.use('', rutas2);
rutas(app);


app.listen(port, function () {
    console.log(`App is running in port http://localhost:${port}?token=123`);
});


