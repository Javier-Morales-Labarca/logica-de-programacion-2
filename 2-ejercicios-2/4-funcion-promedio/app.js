//Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(num1, num2, num3) {
    let resultado = (num1 + num2 + num3) / 3;
    console.log(`El promedio es: ${(resultado)}`);
    return resultado;
}

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

promedio(num1, num2, num3);