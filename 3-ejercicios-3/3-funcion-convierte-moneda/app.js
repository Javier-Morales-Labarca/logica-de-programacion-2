/* Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo 
con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80*/

let dolar = 4.80;
let valorDolar = parseFloat(prompt(`El precio cotizado del dolar es de ${dolar} USD`));
let monedaCLP = parseFloat(prompt("Ingrese el valor del USD en CLP: "));
let resultado = convertirDolar(dolar, monedaCLP);

function convertirDolar(dolar, monedaCLP) {
    return monedaCLP * dolar; 
}
    console.log("El monto en peso CLP es " + "$"+resultado.toFixed(0));