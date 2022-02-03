console.log('******* Palabra más larga **********');
const palabras = ["soy", "una", "frase", "larga"];

/**La función Math.max() devuelve el mayor de cero o más números. */

var totales = palabras.map(palabra => palabra.length);

const palabraMasLarga = () => {
    let max = Math.max.apply(null, totales)
    for (const palabra of palabras) {
        if (palabra.length === max) {
            console.log(palabra);
            break;
        }
    }
}

console.log(totales);
palabraMasLarga();

console.log('******* Union de los elementos comunes *******');
const elementos = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
const cadenas = elementos.map(elemento => elemento.split(","));
const iguales = [];
const interseccion = () => {
    const elementUno = cadenas[0];
    const elementDos = cadenas[1];
   for (const e of elementUno) {
       for (const i of elementDos) {
           if (e === i) {
               iguales.push(e);
           }
       }
   }
   console.log(iguales);
}

interseccion()

console.log('******** Revertir una cadena **********');
const reversar = p => p.split("").reverse().join("");
console.log(reversar("Reversame!"));

console.log('******** FizzBuzz ************');
const fizzbuzz = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            console.log('fizz');
        }  else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(5);

console.log('******************************************');
console.log('******************************************');
console.log('******************************************');