/* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.*/

function perimetroArea () {
    let alto = parseFloat(prompt("Ingrese el alto: "));
    let ancho = parseFloat(prompt("`Ingrese el ancho: "));



//formulas 
const perimetro = (alto+ancho) * 2;
const area = alto * ancho;
    console.log(prompt(`El perimetro es: ${perimetro} y el área es: ${area}`));

}

perimetroArea();