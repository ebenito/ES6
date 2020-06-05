//  ******************* Ejemplo Extensiones de Objetos Literales ***************** 

function getCar(fabricante, modelo, valor) {
    return {
        fabricante,
        modelo,
        valor,
        ['fabricante ' + fabricante]: true,
        depreciar() {
            this.valor -= 2500;
        },
    };
}

let result = getCar("Renault", "Clio", "12000€");
console.log(result);
console.log(result.valor);

//  ******************* Ejemplo Destructuring Assignment ***************** 
let arr = [1, 2, 3];
let [a, b, c] = arr;
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
console.log(a, b, c); // 1 2 3

let obj = { x: 4, y: 5, z: 6 };
let { x: d, y: e, z: f } = obj;
console.log(d, e, f); // 4 5 6

let { x, y, z } = obj;
// let {x:x, y:y, z:z} = obj;
// let x = obj.x;
// let y = obj.y;
// let z = obj.z;
console.log(x, y, z); // 4 5 6



//  **************    Investigación Tecnológica     ***************** 
//  ** Evitar algunos elementos de un array, y asignar a variables **
//  ** aquellos valores que estén en la posición que se desee.     **
//  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

var vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria'];

var pos = 1, hastaPos = 2;

var elementosEliminados = vegetales.splice(pos, hastaPos);
console.log(elementosEliminados);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales" 
