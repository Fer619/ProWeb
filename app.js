var express = require ('express'); // Se importa la dependencia
var app = express (); // En esta linea de código se declara la app de Express

var port = process.env.PORT || 3000; // Se settea el puerto para que reconozca al servidor
app.set('view engien', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next){
    console.log('Request Url:' + req.url);
    next();
});


// Código para crear la primera ruta (al mismo nivel que raíz), y se introduce la frase de Hello World! que debe aparecer una vez levantemos el server
app.get ('/', function(req, res) {
    //res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>`);
    res.render('index');
});

//Segunda ruta que se crea ahora debe regresar un objeto JSON
app.get ('/api', function (req, res) {
    res.json({firstname: 'Fernando', lastname: 'Briceño' });
});

//Tercera ruta que se crea en la cual esta recibira un parametro que nosotros agreguemos
app.get ('/person/:id', function (req, res) {
    //res.send('<html><head></head><body><h1>Person: '+ req.params.id + '</h1></body></html>');
    res.sender('person', { ID: req.params.id});
});
//Ruta de numbers en la cual se modifico el llamado de la información y se extrae la info de los archivos ejs
// se utiliza .sender y se agrega el nombre del archivo y el ID correspondiente que se encuentra dentro del archivo
app.get ('/number/:id', function (req, res) {
    //res.send('<html><head></head><body><h1>Person: '+ req.params.id + '</h1></body></html>');
    res.sender('number', { ID: req.params.id}); //Dentro de los corchetes o llaves se define la variable que recibira el parametro, junto con la id (ID en todos los archivos)del archivo correspondiente
});

app.listen(port); // Se levanta el server y se pone a modo escucha para cualquier instrucción

