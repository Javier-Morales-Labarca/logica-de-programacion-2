//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function elNumeroMayor(num1, num2) {
    console.log(`El número mayor es: ${Math.max(num1, num2)}`);
}

let num1 = parseInt(prompt("Ingrese el primer número: "));    
let num2 = parseInt(prompt("Ingrese el segundo número: "));

elNumeroMayor(num1, num2);