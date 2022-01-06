//Función declarada
//Asignar valores por defecto a los parámetros de una función
function saludar (nombre = 'desconocido', edad = 0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

//saludar('Johana', 27);
//saludar();

//funcionDeclarada();

//función declarada
function funcionDeclarada () {
    console.log('Esto es una función declarada');
}

//funcionDeclarada();

//Función anónima
const funcionExpresada = function () {
    console.log('Esto es una función exresada');
}

//funcionExpresada();
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]]
console.log(b[3][3][0]);
//Propiedad
console.log(b.length);
//Métodos
b.push(["Amarillo", "Azul", "Rojo"])
console.log(b);
b.pop()
console.log(b);

const c = Array.of("X", "Y", "Z", 9, 8, 7)
console.log(c);

const d = Array(10).fill(false)
console.log(d);

const colores = ["Amarillo", "Azul", "Rojo"]

//param 1: valor
//param 2: indice
colores.forEach(function(el, index) {
    console.log(`<li id="${index}">${el}</li>`);
}) 

//Objetos
/*Dentro de un objeto a las variables se les llama atributos/propiedades y a las funciones se les llama métodos */
const johana = {
    nombre: 'Johana',
    apellido: 'Llanos',
    edad: 27, 
    pasatiempos: ["Hacer ejercicio", "Leer", "Estudiar"],
    soltera: true,
    contacto: {
        email: 'johis@gmail.com',
        twitter: '@johis',
        movil: '1234567891'
    },
    saludar: function () {
        console.log("Hola :)");
    },
    decirMiNombre: function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en Twitter.`);
    }
}

johana.saludar()
johana.decirMiNombre()
console.log(johana.pasatiempos[0]);

/**this hace referencia al contexto, en este caso el contexto del objeto */

//Métodos
console.log(Object.keys(johana));
console.log(Object.values(johana));