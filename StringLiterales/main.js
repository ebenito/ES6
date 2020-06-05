//  ******************* Ejemplo Strings Literales ***************** 

let user = 'Kevin';
console.log (`Hola ${user}!`); // Hola Kevin!


//  *************************** KATA / RETO 5 **************************
//  ** Introduce tu nombre y un número para saber si este ese primo.  **
//  ** Representando con un color el resultado si el número es primo o viceversa

const isPrime = num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;

    return num > 1;
}

//Por pantalla
function ConsultaSiEsPrimo() {
    let nombre = document.getElementById("nombre").value;
    let num = document.getElementById("numero").value;
        
    if(!isPrime(num)){
        document.getElementById("result").innerHTML = `Hola ${nombre}, el número que has introducido, ${num}, NO es primo`;
        document.getElementById("result").style = "font-weight: 800; color: red;"
    }
    else{
        document.getElementById("result").innerHTML = `Hola ${nombre}, el número que has introducido, ${num}, SI es primo`;
        document.getElementById("result").style = "font-weight: 800; color: green;"
    }
}

//Por consola
// let nombre = prompt("Hola, ¿puedes decirme tu nombre?");
// let num = parseInt(prompt("Ahora dime un número para saber si es un número primo"));

// if(!isPrime(num)){
//     console.log(`Hola ${nombre}, el número que has introducido, ${num}, NO es primo`);
// }
// else{
//     console.log(`Hola ${nombre}, el número que has introducido, ${num}, SI es primo`);
// }