//  ******************* Ejemplo ***************** 

let singulares = ['manzana', 'banana', 'naranja'];
let plurales = singulares.map(fruta => fruta + 's');

console.log(plurales); // ['manzanas', 'bananas', 'naranjas']


//  *************************** KATA / RETO 2 **************************
//  * Programa para que cuente todos los caracteres usados en una frase *

const fraseMuestra = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore eveniet ad. Hic omnis deleniti temporibus ducimus sed voluptates animi id quisquam quibusdam magnam in, doloribus cum dolorem odit et.";

//creamos la funcion contador
let contador = string => {
    return string.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
    }, {});
   };

//depositamos el resultado que retorna la función a una variable
let resultado = contador(fraseMuestra);
console.log(resultado);

// Variante 2: No sea sensible a mayúsculas, palabras con acento y no cuente espacios
let contador2 = string => {
    return string.split('').reduce((total, letter) => {
        const letterLOWER = letter.toLowerCase().replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u");
        if (letterLOWER != ' ')        
        {
            total[letterLOWER] ? total[letterLOWER]++ : total[letterLOWER] = 1;
        }
    
        return total;
    }, {});
   };

//depositamos el resultado que retorna la función a una variable
let resultado2 = contador2(fraseMuestra);
console.log(resultado2);


// Variante 3: Contando el número de palabras y letras
let contador3 = string => { 
    return string.split('').reduce((total, letter) => {           
        if (letter != ' ')        
        {              
           total > 0 ? total++ : total = 1;
        }
    
        return total;
    }, {}).toString() + " letras";
   };

let contador4 = string => {
    return string.split(' ').length + " palabras";
   };

//depositamos el resultado que retorna la función a una variable
let resultado3 = contador3(fraseMuestra);
let resultado4 = contador4(fraseMuestra);
console.log(resultado3 + ' y ' + resultado4);