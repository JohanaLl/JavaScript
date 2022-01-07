//try catch

try {
    console.log('try ejecuta el código a evaluar');
    NotDefined
    console.log('segundo bloque try');
} catch (error) {
    console.log('catch captura cualquier error lanzado en el try');
} finally {
    console.log('finally siempre se ejecuta al final de un bloque try-cath');
}

//Erroes personalizados throw

try {
    let numero = 'y'
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un número")
    }
} catch (error) {
    console.log(`Se produjo el siguiente ${error}` );
}