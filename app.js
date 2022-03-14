var http= require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');




// La terminal se queda congelada y no responde y no permite ingresar otro comando


// Una vez abierta la página del navegador e ingresado el localhost:1337 y entrado a los headers nos mostro
// diferentes datos como la URL que lo solicita, la conexión, contenido (text/plain), la fecha que se realizo
// la cadena de aceptación y los usuarios agentes para los distintos navegadores entre otras cosas.