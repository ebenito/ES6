//  ******************* Ejemplos ***************** 

// método For Of 
let apellidos1 = [ 'pérez', 'garcía', 'gómez'];
for (let setname of apellidos1) {
    console.log(setname);
}


// método For In 
let apellidos2 = ['perez', 'garcia', 'gomez'];
for (let index in apellidos2) {
    console.log('apellidos[' + index + '] = ' + apellidos2[index]);
}
