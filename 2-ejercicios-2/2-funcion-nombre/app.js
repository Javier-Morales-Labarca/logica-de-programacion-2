//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludos(nombre) {
    console.log(`¡Hola ${nombre}!`)

}

let nombre = prompt("Ingresa tu nombre: ");

saludos(nombre);