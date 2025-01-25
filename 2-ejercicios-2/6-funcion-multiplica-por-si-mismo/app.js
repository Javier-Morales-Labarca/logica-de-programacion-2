//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function ingresarNumero (num) {
    let resultado = (num * num);
    console.log(`El resultado de multiplicar el n° ingresado por el mismo es: ${resultado}`);
    return resultado;
}

let num = parseInt(prompt("Ingrese un número: "));
ingresarNumero(num);