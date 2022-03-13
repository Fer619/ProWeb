var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

// Me regresa un error que es undefinded, parece que aun no tiene acceso el archivo app a las funciones de emitter
// Después de checar el código encontre que tenia un parte mal el código me regresa el Hello y los diferentes valores (las frases) de emrt

// Debido a que se esta agregando dos funciones con el mismo nombre 
// y el emisor de eventos con la función emit listener permite regresar smbo valores de emtr (greet).

emtr.on('jump', ()=> {
    console.log('someone jumped!');
});

console.log(emtr);
emtr.emit('jump');

// El llamado que se le hace a emtr  en console log lo regresa como una función anonima mientras que la llamada emtr jump si regresa un valor.

//Explicación
//La clase de funciones con las que trabajamos necesitan un llamado especial ya que se utiliza la función emit para recibir un parametro type de la página de app
// y poder invocar los valores de los parametros 



