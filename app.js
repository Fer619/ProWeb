let obj= {
    nombre:'Fernando',
    edad: 28,
    apellido: 'Briceño'
}

console.log(obj.nombre);
console.log(obj['nombre']);

// los console.log regresan el valor de nombre en ambos casos

let myKey = 'nombre'

console.log(obj[myKey]);
console.log(obj);

// el llamado de console regresa el valor de myKey que en este caso seria la variable/ dato nombre

//Explicación
//Lo que pasa con los console es que hace la llamada a la
//información guardada en el string obj y myKey que en este
//caso es la variable nombre y nos regresa el valor dado a esta variable.

