class Animal {

    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }

        //Métodos agregados al prototipo de la función constructora
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
    
}

//Herrencia
class Perro extends Animal {

    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("Guauuuu guauuuuuu!!!");
    }

    //Un método estático se puede ejecutar sin necesidad de instanciar la clase
    static queEres() {
        console.log('Los perros somos animales mamiferos que pertenecen a la familia de los caninos. Somos considerados los mejores amigos del hombre');
    }

    //Los get y set permiten obtener y establecer valores a los atributos de una clase
    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }
}

Perro.queEres()

const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Pequeño");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar()

scooby.setRaza = "Gran Danes"
console.log(scooby.getRaza);

