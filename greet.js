console.log('Hello from the module');

// se convierte el console en una función de flecha donde greet hace el llamado para obtener el Hola
let greet = () => console.log('Hello from the module')
greet();

// Se realiza una modificación a la función greet para conceder acceso a app
let greet = () => console.log('Hello from the module')
module.exports= greet; // el acceso se obtiene por la instrucción module.exports


