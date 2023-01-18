"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona8 = exports.nombre6 = void 0;
//tipos
let numeros = 15;
let texto = "hola mundo";
let arreglosTexto = ["hola", "mundo"];
let arreglosNumeros = [1, 2, 3];
let arreglosFormasNum = [1, 2, 3];
let arreglosFormasTex = ["hola", "mundo"];
let si = true;
let no = false;
let siOno = [false, true, false, true, false];
let tupla;
tupla = [23, "hola", true];
function sumar(a, b) {
    return a + b;
}
const suma = sumar(20, 10);
function mostrar(a) {
    console.log(a);
}
const mostrar2 = (a) => {
    console.log(a);
};
// mostrar("cesar")
// mostrar2("castillo")
//el interrogante es para dar una opcionalidad a la variable  para
const opcionales = (nombre, apellido, edad) => {
    if (edad) {
        console.log(`su nombre es ${nombre} y su apellido es ${apellido} y tiene ${edad} años`);
    }
    else
        console.log(`su nombre es ${nombre} y su apellido es ${apellido}`);
};
// opcionales("cesar","castillo")
const porDefecto = (nombre, apellido, edad = 32) => {
    if (edad) {
        console.log(`su nombre es ${nombre} y su apellido es ${apellido} y tiene ${edad} años`);
    }
    else
        console.log(`su nombre es ${nombre} y su apellido es ${apellido}`);
};
// porDefecto("felipe","castillo")
const parametrosRest = (postre, ...frutas) => {
    console.log(`el postre es ${postre} y tiene ${frutas}`);
};
// parametrosRest(`postre1`,"banano","papaya","fresas","melon")
//clases--------------
class vehiculo {
    constructor(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    acelerar() {
        console.log("Esta acelarando");
    }
    frenar() {
        console.log("Esta frenando");
    }
}
const coche = new vehiculo("ford", "17/01/23", 6);
coche.marca;
coche.fecha;
// console.log(coche.marca);
// coche.acelerar()
//herencias -------------------
class padre {
    constructor(_nombre, _edad) {
        this.nombre = _nombre;
        this.edad = _edad;
    }
    mostrarNombres() {
        // console.log(this.nombre);
    }
}
class hijo extends padre {
    constructor(_nombre, _edad, _apellido) {
        super(_nombre, _edad);
        this.apellido = _apellido;
    }
    mostrarNombresHijo() {
        // console.log(this.nombre);
    }
}
const nuevohijo = new hijo("hijo", 26, "castillo");
nuevohijo.mostrarNombres;
nuevohijo.mostrarNombresHijo;
// console.log(nuevohijo);
//modificadores de acceso------------------
class animal {
    constructor(_nombre, _tamaño) {
        this.nombre = _nombre;
        this.tamaño = _tamaño;
    }
    moverse() {
        console.log("Me estoy moviendo ");
    }
}
const obj = new animal("serpierte", 2);
obj.moverse;
//privadas 
class animal2 {
    constructor(_nombre, _tamaño) {
        this.nombre = _nombre;
        this.tamaño = _tamaño;
    }
    moverse() {
        console.log("Me estoy moviendo ");
    }
}
const obj2 = new animal2("serpierte", 2);
//GET Y SET---------------------
// let permiso:boolean = true
// class persona{
//   public nombre:string;
//   constructor(nombre:string){
//     this.nombre=nombre
//   }
//   get getNombre():string{
//     return this.nombre
//   }
//   set setNombre(nombre:string){
//     if (permiso){
//       this.nombre=nombre
//     }else{
//       console.log("no tiene es permiso para eso ");
//     }
//   }
// }
// const objeto =new persona("manuel")
// objeto.setNombre=("cesar")
// console.log(objeto.getNombre);
//clases abstractas -------------------
class padre2 {
    saludar(saludo) {
        return saludo;
    }
}
class hijo2 extends padre2 {
    caminar() {
        console.log();
    }
    gatear() {
        console.log();
    }
}
class otraClase extends padre2 {
    caminar() {
        console.log();
    }
    gatear() {
        console.log();
    }
}
let perro = { nombre: "scooby", raza: "pastor" };
let funcionGeneral;
funcionGeneral = function (nombre, apellido, edad) {
    console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`);
};
//  funcionGeneral("manuel","muñoz",32)
//tipado Generico-----------
// el error ANY--------------
const nombre = "manuel";
const numero = 32;
let variable = "manuel";
//  variable.
// nombre.
//funciones Genericas--------
function mostrar3(dato) {
    return dato;
}
// console.log(mostrar3("manuel"));
function mostrarGenerica(dato) {
    return dato;
}
let obje = { nombre: "cesar" };
let num = { nombre: 15 };
//modulos
exports.nombre6 = "manuel";
class persona8 {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
exports.persona8 = persona8;
//import {nombre6,persona8,humano} from "./...""
class persona9 {
    constructor(nombre, edad, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
    mostar() {
        console.log(this.nombre);
    }
}
exports.default = persona9;
