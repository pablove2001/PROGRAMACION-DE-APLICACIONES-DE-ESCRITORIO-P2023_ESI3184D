
function middleware(req, res, next) {
    console.log('Pase por middleware');
    const query = req.query;
    const token = query.token;
    const nombre = query.nombre;


    console.log(query);

    if (token == '123') {
        console.log(nombre)
        next();
    } else {
        res.send('Error auth');
    }

}

module.exports = middleware;