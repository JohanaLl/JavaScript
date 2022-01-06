//Métodos de string
let nombre = 'Johana'
let apellido = 'Llanos'
let correo = 'JOHIS@GMAIL.COM'
let cadena = 'Esto es una cadena más larga, para hacer otros ejemplos  '
let saludo = new String("Hola mundo")

console.log('Tamaños : ', nombre.length, correo.length, cadena.length, saludo.length);
console.log(nombre.toUpperCase(), correo.toLowerCase(), cadena.includes('Esto'),
            cadena.includes('Leidy'), cadena.split(" "), cadena.split(","),
            cadena.trim());

//Interpolación de variables
//Template String ``
let saludo2 = `Hola mi nombre es: ${nombre} ${apellido}`
console.log(saludo2);

//Los template string también sirven para generar html dinámico
let ul = `
    <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
    </ul>
`
console.log(ul);

