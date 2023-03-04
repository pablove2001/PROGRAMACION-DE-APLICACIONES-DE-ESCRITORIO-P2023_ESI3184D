const path = require('path');
const express = require('express');


module.exports = function (app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));


    app.get('/', async (req, res) => {
        const url = `https://newsapi.org/v2/everything?q=${req.query.search}&sortBy=popularity&apiKey=7f3b8a6bff0e4ce78e0704292c5043e8`;

        try {
            const response = await fetch(url);
            const json = await response.json();

            res.render('home', { articles: json.articles });

        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Something went wrong' });
        }
    },);

    app.get('*', function (req, res) {
        res.status(404).send('Pagina no encontrada');
    })
}


