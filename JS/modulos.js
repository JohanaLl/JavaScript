import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as ar } from "./aritmetica.js"

console.log('Archivo modulos .js');
console.log(PI, usuario);
console.log(ar.sumar(3,4));
console.log(ar.restar(3,4));
saludar();
let saludo = new Saludar();
saludo;