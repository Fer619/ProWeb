// let obj = {};

let persona = {
    nombre: "Fernando",
    apellido: "Briceño",
    getName: function() {
        return `${this.nombre} ${this.apellido}`
    },

    domicilio: {
        calle: "Galicia #703",
        colonia: "Villas Diamante",
        cp: 28986,
        municipio: "Villa de Alvarez",
        getDomicilio: function() {
            return `${this.calle} ${"Colonia:" + this.colonia} ${"CP:" + this.cp + ","} ${this.municipio}`
        }
    }
}

// Nota después de varios node app no cambiaban los valores fue necesario cambiar de terminal para corregir el error 

//console.log(persona); // llama todos los valores del objeto persona
//console.log(persona.nombre); // llama solo el valor nombre del objeto persona
//console.log(persona.apellido); // lama solo el valor apellido del objeto persona.
console.log(persona.getName()); // llama la función getName y regresa el nombre y apellidos juntos
//console.log(persona.domicilio); // regresa solo los valores del objeto domicilio (calle, colonia, cp mun).
console.log(persona.domicilio.getDomicilio());


