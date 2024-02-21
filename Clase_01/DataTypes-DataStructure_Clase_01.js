// Tipo de datos
//  - int enteros
//  - float decimales
//  - strings cadenas de caracteres

// Para imprimir utilizar la funcion console.log(`Lo que necesites imprimir, ${variable}`);
// La funcion de = mas que una asignacion es una referencia, es decir que hace alusion al mismo objeto, si este objeto es mutable tambien mutara.
// Existen 2 tipos de asignacion de variable, let y const, let permite que el valor sea mutable, y const obliga a la variable a tener un valor constante
// es decir no puede sufrir una reasignacion.
const b = 3;
let a = 1;
a = 2;
console.log("La variable es", a);
console.log(`La variable es ${a}`);

// Los string no son mutables pero son iterables y pueden ser sumados o multiplicadas.
let cadena = "Hola me llamo Roberto";
for (let i = 0; i < cadena.length; i++) {
  console.log(cadena[i]);
}
// JS:
// for (let i = 0; i < 10; i += 2) {
//   console.log(i)
// }
// for (let elemento of cadena){
//   console.log(elemento)
// }
// Python:
// for i in range(0,10,2):
//   console.log(i)
// for elemento in cadena:
//  console.log(elemento)

// Las arrays, estructura iterable y mutable.
// Digamos que queremos hacer una copia de la lista y modificarla y ademas conservar la original no se debe de realizar esto por la forma en que funciona
// el =, recuerden es de referencia no de asignacion.
console.log("");
console.log("");
console.log("Forma NO efectiva ");
let lista = [1, 2, 3, 4, 5];
let lista_2 = lista;
for (let i = 0; i < lista.length; i++) {
  lista_2[i] = 4;
}

for (let i of lista) {
  console.log(i);
}

// Se podria trabajar de la siguiente manera:
console.log("");
console.log("");
console.log("Forma Efectiva");
lista = [1, 2, 3, 4, 5];
lista_2 = [];
for (let i = 0; i < lista.length; i++) {
  // lista_2[i] = 4;
  lista_2.push(4); // esto es el append de python
}

for (let i of lista) {
  console.log(i);
}

console.log("");
console.log("");
console.log("Forma Efectiva");
let copia = [...lista];
for (let i = 0; i < lista.length; i++) {
  copia[i] = 4;
}

for (let i of lista) {
  console.log(i);
}

// Los objetos, no son iterables y son mutables y se componen de la siguiente manera:
let objeto = {
  cadena: "Valor de la propiedad",
  numeros: 1,
  listas: [1, 2, 3, 4],
  anidados: {
    cadena_anidado: "Valor de la propiedad",
    numeros_anidado: 1,
    listas_anidado: [1, 2, 3, 4],
  },
};

// Para llamar los objetos basta con poner objeto.propiedad o objeto[propiedad]
console.log("");
console.log("");
console.log("Forma de acceder a propiedades en los objetos");
console.log(objeto.cadena);
console.log(objeto["anidados"].listas_anidado);

objeto["nueva_propiedad"] = "Hola me llamo Roberto";
console.log(objeto.nueva_propiedad);

// ... es un operador llamado de propagacion permite "expandir" elementos iterables (como arrays) o
// propiedades de objetos en lugares donde se esperan cero o más argumentos (en llamadas a funciones)
// o elementos (en arrays) o pares clave-valor (en objetos).
objeto = { ...objeto, nueva_propiedad_2: [1, 2, 2] };
console.log(objeto.nueva_propiedad_2);

objeto["nueva_propiedad_2"] = "Ahora soy un string";
console.log(objeto.nueva_propiedad_2);

// Funciones, funciones flecha, clases y metodos.
// Funcion normal
function sumar(a, b) {
  return a + b;
}

const sumar_flecha = (a, b) => {
  return a + b;
};
console.log("Distintos metodos de utilizar funciones");
console.log("funcion flecha ", sumar_flecha("hola", "como estas"));
console.log("funcion normal ", sumar(1, 2));

// Para utilizar un metodo necesitas definir primero una clase, a la cual un objeto que pertenezca a esa clase,
// va a heredar dichos metodos
class Numeros {
  // Esto si es un metodo
  sumar(a, b) {
    return a + b;
  }
}

// Crear una instancia de la clase Numeros
const numeros = new Numeros();

// Usar el método sumar para sumar dos números
const resultado = numeros.sumar(1, 2);
console.log("resultado utilizando metodos");
console.log(resultado); // Debería mostrar 8 en la consola

// para los condicionales la sintaxis es la siguiente

// if(condicion){

// }
// else if(condicion){}
// else{}

// los operadores son:
// === - strict
// !== - strict
// == - no strict xd
// !=
// <=
// >=

console.log(1=='1')
console.log(1==='1')
