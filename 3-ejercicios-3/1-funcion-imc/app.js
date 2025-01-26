/*Crea una función que calcule el índice de masa corporal (IMC) de una persona 
a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/

const peso = parseFloat(prompt("Digite su peso: ")); 
const altura = parseFloat(prompt("Digite su altura: ")); 
const imc = (peso / (altura ** 2)); {
    
}

function calcularIMC(peso, altura) {
    return (imc.toFixed(2));
}

console.log(calcularIMC(peso, altura)); 