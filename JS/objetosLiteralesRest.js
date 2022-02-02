console.log('********** Objetos literales **************');
let nombre = "Dala", edad = 7;

const dog = {
    nombre,
    edad,
    raza: "Criolla",
    ladrar() {
        console.log('Guauuu guauuuu!!');
    }
}

console.log(dog);
dog.ladrar();

console.log('********** Rest, operador spread **************');
/**Los parámetros REST pueden o no estar, pueden o no ser infinitos */

function sumar(a, b, ...c) {
    let resultado = a + b;

    c.forEach(n => resultado += n)

    return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));

/**SPREAD almacenar multiples elementos, expandir expresiones que reciben multiples valores */
const arr1 = [1, 2, 3, 4, 5], 
    arr2 = [6, 7, 8, 9, 0]

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2]
console.log(arr3);