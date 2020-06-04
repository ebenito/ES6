//  ******************************* Ejemplos ***************************** 
// Ejemplo SPREAD
const Spread = (name, ps, atk, def, speed) => {
    console.log("Nombre: ", name);
    console.log("Vida: ", ps);
    console.log("Ataque: ", atk);
    console.log("Defensa: ", def);
    console.log("Velocidad: ", speed);
   }

 let Pokemon = ["Pikachu", 35, 55, 40, 90]
 console.log(...Pokemon) // Pikachu 35 55 40 90
 Spread(...Pokemon)
 
//  Ejemplo REST

function f(...args) {
    console.log(args);
}

f(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

function g(arg1, arg2, ...argRest) {
    console.log(arg1, arg2, argRest);
}

g(1, 2, 3, 4, 5); // 1 2 [3,4,5]


//  ***************************** KATA / RETO 4 ****************************
//  ******** Transforme un String en mayúscula sin usar  toUpperCase *******

let spread = (nombre) => {
let arr = [];

for(let i = 0; i < nombre.length; i++){
    if(nombre[i].charCodeAt(0) >= 97 && nombre[i].charCodeAt(0) <= 122) {  // ASCII 92 = a | 122 = z (minuscula)
        arr.push(nombre[i].charCodeAt(0)-32);  //Al quitar 32 obtiene el ASCII de la letra mayuscula
        arr[i] = String.fromCharCode(arr[i]);
    }
    else {
        arr.push(nombre[i].charCodeAt(0));
        arr[i] = String.fromCharCode(arr[i]);
    }
}
return arr;
};

let nombre = "Javascript";
let resultado = spread([...nombre]);
console.log(resultado);

// *** Nivel 2: con ñ

let spread2 = (nombre) => {
let arr = [];

for(let i = 0; i < nombre.length; i++){
    if(nombre[i].charCodeAt(0) >= 97 && nombre[i].charCodeAt(0) <= 122) {  // ASCII 92 = a | 122 = z (minuscula)
        arr.push(nombre[i].charCodeAt(0)-32);  //Al quitar 32 obtiene el ASCII de la letra mayuscula
        arr[i] = String.fromCharCode(arr[i]);
    }
    else if (nombre[i].charCodeAt(0) == 241) {   // 241 = ñ 
        arr.push(209);                           // 209 = Ñ 
        arr[i] = String.fromCharCode(arr[i]);
    }
    else {
        arr.push(nombre[i].charCodeAt(0));
        arr[i] = String.fromCharCode(arr[i]);
    }
}
return arr;
};

let nombre2 = "Champiñones";
let resultado2 = spread2([...nombre2]);
console.log(resultado2);


// *** Nivel 3: con acentos
// mapa caracteres: https://es.wikipedia.org/wiki/Windows-1252

let spread3 = (nombre) => {
let arr = [];

for(let i = 0; i < nombre.length; i++){
    if(nombre[i].charCodeAt(0) >= 97 && nombre[i].charCodeAt(0) <= 122) {  // ASCII 92 = a | 122 = z (minuscula)
        arr.push(nombre[i].charCodeAt(0)-32);  //Al quitar 32 obtiene el ASCII de la letra mayuscula
        arr[i] = String.fromCharCode(arr[i]);
    }
    else if (nombre[i].charCodeAt(0) >= 225 && nombre[i].charCodeAt(0) <= 255) {  // códigos extendidos, en minuscula
        arr.push(nombre[i].charCodeAt(0)-32);  //Al quitar 32 obtiene el ASCII de la letra mayuscula
        arr[i] = String.fromCharCode(arr[i]);
    }
    else {
        arr.push(nombre[i].charCodeAt(0));
        arr[i] = String.fromCharCode(arr[i]);
    }
}
return arr;
};

let nombre3 = "¡Murciélagos en València!";
let resultado3 = spread3([...nombre3]);
console.log(resultado3);