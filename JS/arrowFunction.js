console.log('******************************************');
const palabras = ["soy", "una", "frase", "larga"];

/**La función Math.max() devuelve el mayor de cero o más números. */

var totales = palabras.map(palabra => palabra.length);

const palabraMasLarga = () => {
    let max = Math.max.apply(null, totales)
    console.log(max);
    for (const palabra of palabras) {
        if (palabra.length === max) {
            console.log(palabra);
            break;
        }
    }
}

console.log(totales);
palabraMasLarga();

console.log('******************************************');
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

console.log(cadenas, 'cadenas');
interseccion()

console.log('******************************************');
console.log('******************************************');
console.log('******************************************');
console.log('******************************************');
console.log('******************************************');