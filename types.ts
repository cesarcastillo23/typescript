

//tipos
let numeros: number =15
let texto: string ="hola mundo"
let arreglosTexto:string[]=["hola","mundo"]
let arreglosNumeros:number[]=[1,2,3]
let arreglosFormasNum:Array<number>=[1,2,3]
let arreglosFormasTex:Array<string>=["hola","mundo"]
let si:boolean =true
let no:boolean =false
let siOno:boolean[] =[false,true,false,true,false]
let tupla:[number,string,boolean]
tupla=[23,"hola",true]



function sumar(a:number,b:number):number {
  return a + b
}
const suma:number=sumar(20,10)


function mostrar (a:string):void{
  console.log(a)
}

const mostrar2=(a:string):void=>{
console.log(a)
}

// mostrar("cesar")
// mostrar2("castillo")

//el interrogante es para dar una opcionalidad a la variable  para
const opcionales=(nombre:string,apellido:string,edad?:number)=>{
  if(edad){
    console.log(`su nombre es ${nombre} y su apellido es ${apellido} y tiene ${edad} años`)
    
  }else
  console.log(`su nombre es ${nombre} y su apellido es ${apellido}`)
}

// opcionales("cesar","castillo")


const porDefecto=(nombre:string,apellido:string,edad:number=32)=>{
  if(edad){
    console.log(`su nombre es ${nombre} y su apellido es ${apellido} y tiene ${edad} años`)
    
  }else
  console.log(`su nombre es ${nombre} y su apellido es ${apellido}`)
}
// porDefecto("felipe","castillo")

const parametrosRest=(postre:string,...frutas:string[]):void =>{
  console.log(`el postre es ${postre} y tiene ${frutas}`)
}
// parametrosRest(`postre1`,"banano","papaya","fresas","melon")


//clases--------------
class vehiculo{
  marca:string
  fecha:string
  puertas:number

constructor(marca_:string, fecha_:string, puertas_:number){
    this.marca=marca_
    this.fecha=fecha_
    this.puertas=puertas_
  }
  acelerar():void{
    console.log("Esta acelarando");
    
  }
  frenar():void{
    console.log("Esta frenando");
    
  }
}

const coche = new vehiculo("ford","17/01/23",6)
coche.marca
coche.fecha
// console.log(coche.marca);
// coche.acelerar()


//herencias -------------------
class padre {
  nombre :string;
  edad:number;


  constructor(_nombre:string, _edad:number){
    this.nombre = _nombre
    this.edad = _edad

  }
  
  mostrarNombres():void{
    // console.log(this.nombre);
    
  }
}



class hijo extends padre {

  apellido :string
  constructor (_nombre:string,_edad:number,_apellido:string){
    super(_nombre,_edad)
    this.apellido=_apellido
  }
  mostrarNombresHijo(): void {
      // console.log(this.nombre);
     
  }
}
const nuevohijo=new hijo ("hijo",26,"castillo")
nuevohijo.mostrarNombres
nuevohijo.mostrarNombresHijo
// console.log(nuevohijo);

//modificadores de acceso------------------
class animal{
  public nombre:string;
  public tamaño:number


  public constructor (_nombre:string,_tamaño:number){
    this.nombre=_nombre
    this.tamaño=_tamaño
  }
  public moverse():void{
    console.log("Me estoy moviendo ");
    
  }
}
const obj =new animal("serpierte",2)
obj.moverse 

//privadas 
class animal2{
 private nombre:string;
 private tamaño:number


  public constructor (_nombre:string,_tamaño:number){
    this.nombre=_nombre
    this.tamaño=_tamaño
  }
  public moverse():void{
    console.log("Me estoy moviendo ");
    
  }
}
const obj2 =new animal2("serpierte",2)

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
abstract class padre2{
  abstract caminar():void;
  abstract gatear():void;
  
  saludar(saludo:string):string{
    return saludo
  }
}


class hijo2 extends padre2{
  caminar(): void {
      console.log();
      
  }
  gatear(): void {
      console.log();
      
  }
}
class otraClase extends padre2{
  caminar(): void {
      console.log();
      
  }
  gatear(): void {
      console.log();
      
  }
}
//interfaces--------------

// interface persona{
//   nombre:string
//   apellido:string
// }
// function caminar(persona:persona):void{
//   console.log("la persona "+persona.apellido+" esta caminando");
// }
// let nueva_persona ={nombre:"manuel",apellido:"muñoz",edad:37}
// // caminar(nueva_persona)

// //interfaces opcionales -------------------

// interface persona{
// altura:number
//   peso:number
//   nombre?:string
  
// }
// let persona=(altura:2,peso:120):void =>{
  
//     function mostrarMediaPeso(persona:persona):string{
//       let mediapeso:number=persona.altura/persona.peso
//       if(persona.nombre){
//         return `${persona.nombre} tiene una media de ${mediapeso}`
//       }else{
//         return `No se quien eres pero tienes una media de ${mediapeso}`
//       }
//     }
//     console.log(mostrarMediaPeso(persona));
    
//   }
  

//solo lecturas 
  interface perros{
    readonly nombre:string
    readonly raza:string
  }
  let perro:perros={nombre:"scooby",raza:"pastor"}
  // perro.raza="jose"
  // console.log(perro);
  
interface general{
  (nombre:string,apellido:string,edad:number):void
}

let funcionGeneral:general
 funcionGeneral=function(nombre:string,apellido:string,edad:number):void{
  console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`);
  
 }
//  funcionGeneral("manuel","muñoz",32)


 //tipado Generico-----------
// el error ANY--------------
 const nombre:string = "manuel"
 const numero:number = 32
 let variable :any ="manuel"
//  variable.
// nombre.

//funciones Genericas--------
function mostrar3(dato:string):string{
  return dato
}
// console.log(mostrar3("manuel"));

function mostrarGenerica<T>(dato:T):T{
  return dato
}
// console.log(mostrarGenerica(true));

// clases Genericas----------

// class frutas<T>{
//   nombre:string
//   edad:T

//   mostrar:(dato:T)=>T
// }

// const obj =new frutas()

//interfaz generica --------------

interface objetos<T>{
  nombre:T
}

let obje:objetos<string>={nombre:"cesar"}
let num:objetos<number>={nombre:15}

//modulos
 export const nombre6:string="manuel"
  export class persona8{
    nombre:string
    constructor(nombre:string){
      this.nombre=nombre
    }
  }
  export interface humano{
    nombre:string
  }
//import {nombre6,persona8,humano} from "./...""

class persona9{
  nombre:string
  edad:number
  altura:number


  constructor(nombre:string,edad:number,altura:number){
    this.nombre=nombre
    this.edad=edad
    this.altura=altura
 
  }
mostar():void{
  console.log(this.nombre);
  
}
}
export default persona9




