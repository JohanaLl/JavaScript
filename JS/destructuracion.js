console.log('*********Asignación básica de variables*******');
const foo = ['one', 'two', 'three']
const [red, yellow, green] = foo
console.log(red, yellow, green);

console.log('*********Asignación separada de la declaración*******');
let a, b;
[a, b] = [1, 2];
console.log(a, b);

console.log('*********Valores predeterminados*******');
[a = 5, b = 7] = [1]
console.log(a, b);

console.log('*********Intercambio de variables*******'); 
a = 1;
b = 3;
[a, b] = [b, a]
console.log(a, b);

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);

console.log('*********Analizar un arreglo devuelto por una función*******'); 
function f() {
    return [1, 2, 3]
}
[a, b] = f()
console.log(a, b);

console.log('*********Ignorar valores devueltos*******'); 
[a, , b] = f();
console.log(a, b); // 3

const [c] = f();
console.log(c);

console.log('*********Asignar el resto de un arreglo a una variable*******'); 
[a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b);

console.log('*********Desestructuración de objetos*******'); 
const user = {
    id: 42,
    is_verified: true
}

const {id, is_verified} = user;

console.log(id); 
console.log(is_verified);

console.log('*********Asignación sin declaración*******'); 
({a, b} = {a: 1, b: 2});
console.log(a, b);

console.log('*********Asignar a nuevos nombres de variable*******'); 
const o = {p: 5, q: 9};
const {p: fooo, q: bar} = o;
console.log(fooo, bar);

const {d: aa = 10, f: bb = 5} = {a: 3};
console.log(aa, bb);

console.log('*********Desempacar campos de objetos pasados como parámetro de función*******'); 

const obj = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'Jhon',
        lastName: 'Doe'
    }
}

function userId({id}) {
    return id;
}

function whoIs({displayName, fullName:{firstName: name}}) {
    return `${displayName} es ${name}`
}

console.log(userId(obj));
console.log(whoIs(obj));

console.log('*********Establecer el valor predeterminado de un parámetro de función*******'); 
console.log('se iguala a un objeto vacío  para poder llamar la función sin pasarle ningún parámetro');
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
    // haz un dibujo de gráfico
}

drawChart({
coords: {x: 18, y: 30},
radius: 30
});

drawChart()

console.log('*********Desestructuración de arreglos y objetos anidados*******'); 
console.log('Cambia los nombres de las variables');
const metadata = {
title: 'Scratchpad',
translations: [
    {
        locale: 'de',
        localization_tags: [],
        last_edit: '2020-08-29T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
    }
],
url: '/es/docs/Tools/Scratchpad'
}

let {
    title: englishTitle,
    translations: [
    {title: localeTitle},
    ],
} = metadata

console.log(englishTitle); 
console.log(localeTitle);

console.log('*********Iteración "for...of" y desestructuración*******'); 
const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
]

for (const {name: n, family: {father: f}} of people) {
    console.log('Nombre: ' + n + ', Padre: ' + f);
}


console.log('****************');
let key = 'z';
let {[key]: foo2} = {z: 'bar'};
console.log(foo2)

let {h, j, ...rest} = {h: 10, j: 20, c: 30, d: 40}
console.log(h);
console.log(j);
console.log(rest);

console.log('*********Desestructuración combinada de arreglos y objetos*******');
const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
];

const [,, { name }] = props;

console.log(name); 

console.log('*********Se busca la cadena de prototipos al desestructurar el objeto*******');
let obj2 = {self: '123'};
obj2.__proto__.prot = '456';
const {self, prot} = obj2;
console.log(obj2);