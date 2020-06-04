//  ***************************** KATA / RETO 3 *************************** 
//  * Programa que genere nombres aleatorios de robots tipo RX837 o RX811 *

let getPrecioFinal = (numero, prefijo = "RX") => prefijo + numero;
let random = Math. floor(Math.random() * 999);

let resultado = getPrecioFinal(random);

console.log("El robot se llama: ", resultado);



// * Genere nombre robot tomando las dos primera letras del nombre, y añade 2 *
// * cifras a posteriori con la posición que ocupan éstas en el abecedario.  *
function GeneraNombreRobot() {
    let nombre = document.getElementById("nombre").value;
    const prefijo = nombre.toUpperCase().substring(0,2);
    let x = prefijo.substring(0,1).charCodeAt(0) - 64 // A=65 --> -64 = 1
    let y = prefijo.substring(1,2).charCodeAt(0) - 64 // B=66 --> -64 = 2

    
    //por pantalla:
    document.getElementById("result").innerHTML = `
        <p>Tu nombre robot es : ${prefijo + x + y} </p>    `
}