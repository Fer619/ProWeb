let obj= {
    nombre:'Fernando',
    edad: 28,
    apellido: 'Briceño',
    keypress: function (){
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function(){
        console.log('El puntero del mouse esta arriba');
    }
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

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

// Explicación
// Al igual que en el caso anterior la función myKey pero ahora el valor de la función se cambia en ambos casos y se regresa un valor distinto

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("hola desde el array");
});

console.log(myArray);

// regresa todos los valores dados a la función myArray debido a que esta vez solo se realizo un console log que englobo todos los valores de myArray regreso cada valor dado 

myArray.push(function () {
    console.log(obj[myKey]);
})

console.log(myArray);

// Regresa una función pero la menciona como Anonima, debido a que no tiene acceso a la funcion obj

let funcArray = [];

funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3")
});

funcArray.forEach((item) => {
    item();
})

//No se puede acceder al funcArray

