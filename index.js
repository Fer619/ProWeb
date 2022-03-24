var express = require ('express'); // Se importa la dependencia
const { ftruncateSync } = require('fs');
var app = express (); // En esta linea de código se declara la app de Express

var port = process.env.PORT || 3000; // Se settea el puerto para que reconozca al servidor


// Código para crear la primera ruta (al mismo nivel que raíz), y se introduce la frase de Hello World! que debe aparecer una vez levantemos el server
app.get ('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

//Segunda ruta que se crea ahora debe regresar un objeto JSON
app.get ('/api', function (req, res) {
    res.json({firstname: 'Fernando', lastname: 'Briceño' });
});

//Tercera ruta que se crea en la cual esta recibira un parametro que nosotros agreguemos
app.get ('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: '+ req.params.id + '</h1></body></html>');
});

app.listen(port); // Se levanta el server y se pone a modo escucha para cualquier instrucción


