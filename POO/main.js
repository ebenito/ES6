//  ******************* Ejemplos ***************** 

class Tarea {
    constructor(texto, id) {
        console.log('tarea instanciada! con el texto:', texto);
        this.texto = texto;
        this.id = id;
        this.fecha = new Date();
    }
    fechaHoy() {
        this.fecha = new Date();
    }
}

let tarea = new Tarea('comprar leche', 1); // "tarea instanciada!"
console.log(typeof tarea); // object
console.log(tarea);  // Tarea { texto: 'comprar leche', id: 1, fecha:{} }



//  *************************** KATA 6 **************************
//  * Crea una Clase llamada Coche con las siguientes características:
//  *   + Nombre
//  *   + Marca
//  *   + Velocidad
//  *   + Acelerar(): Aumentar velocidad a 30
//  *   + Frenar(): Dejar velocidad a 0 *

class Coche {
    constructor(nombre, marca, velocidad) {
      this.nombre = nombre;
      this.marca = marca;
      this.velocidad = velocidad;
    }

    acelerar() {
      return this.velocidad + 30;
    }

    frenar() {
      return (this.velocidad = 0);
    }
  }

  const viaje = new Coche("Dokker", "Dacia", 90)
  const gas = viaje.acelerar();

  console.log(viaje.marca + " " + viaje.nombre + "  -  Velocidad actual: " +  gas);
  
