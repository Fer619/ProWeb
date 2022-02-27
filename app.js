// función para llamar a la función greet con la función require 
//aunque esta no tendra resultado se obtendra un ERROR
//require('./greet');

//greet(); //se genera la llamada de la función greet en el archivo app.js

// ambas funciones generar un error al llamarlas con node app


// nueva versión de la función para llamar a greet
let greet = require('./greet');
greet(); //sigue ocasionando un error debido a que sigue sin tener acceso a greet.


