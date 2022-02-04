//export exporta las constantes
//Solo se puede tener un export default
export const PI = Math.PI
export let usuario = 'Leidy'
export let password = '1234'
//export default password;

//default significa que se importa automáticamente
export default function saludar() {
    console.log("Hola Módulos +ES6");
}

export class Saludar {
    constructor() {
        console.log("Hola clase +ES6");
    }
}