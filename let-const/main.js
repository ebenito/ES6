//  ******************* Ejemplo LET ***************** 

let Pikachu = 40;
var Charmander = 60;

{
 let Pikachu = 0.4;
 var Charmander = 0.6;

 console.log(Pikachu, Charmander);
 // Pikachu: 0.4, Charmander: 0.6
}

console.log(Pikachu, Charmander);
// Pikachu: 40, Charmander: 0.6

//  ******************* Ejemplo CONST ***************** 

// Ejemplo 1: Variables
const IMPACTRUENO = 40;
let TRUENO = 110;

try {    
    IMPACTRUENO = TRUENO; // TypeError
}
catch (error) {
    console.log(error.message);
}

// Ejemplo 2: Arrays
const ARRAY = [5, 6];

ARRAY.push(7);
console.log( ARRAY ); // [5,6,7]


try {    
    ARRAY = 10; // TypeError
}
catch (error) {
    console.log(error.message);
}

ARRAY[0] = 3; // Item no es Inmutable

console.log( ARRAY ); // [3,6,7]



//  ************************* KATA / RETO 1 ************************ 
//  ********** Calcular el perímetro y área de un círculo **********

function CalculaPerArea() {
    //variables radio y pi
    //let radio = prompt("¿Podría facilitarme el radio del circulo?");
    let radio = document.getElementById("radio").value;
    const pi = 3.14159265358979323846264338327950288419716939937510;

    //cálculo del perímetro
    let perimetro = 2 * pi * radio;

    //cálculo del área
    let area = pi * (radio ** 2);
    console.log("El perímetro es: ", perimetro);
    console.log("El area es: ", area); 

    //por pantalla:
    document.getElementById("result").innerHTML = `
        <p>El perímetro es: ${perimetro} </p> 
        <p>El área es: ${area} </p>
    `

}

