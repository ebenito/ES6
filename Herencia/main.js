//  ******************* Ejemplos ***************** 
    
class Rectangle {
  constructor(height, width) {
      this.name = "Rectangle";
      this.height = height;
      this.width = width;
  }

  sayName() {
      console.log("Hi, I am a ", this.name + ".");
  }

  get area() {
      return this.height * this.width;
  }

  set area(value) {
      this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length) {
      super(length, length);
      this.name = "Square";
  }
}  

let r1 = new Rectangle(10,20);
let r2 = new Square(20);
r1.sayName();
console.log(r1);
r2.sayName();
console.log(r2);

//  *************************** KATA 7 **************************
//  * Crea un Objeto Vehículo el cual aproveches la herencia para crear: 
//  *   Coche, Moto, Patin y Bicicleta.
//  * Con Características:
//  *   + Marca
//  *   + Matricula
//  *   + Nº Ruedas
//  *   + Nº Puertas
//  *   + Años
//  *   + Velocidad
//  *   + Correr() => velocidad += 10
//  *   + Frenar() => velocidad = 0
//  *   + Aparcar() => console.log(Aparcao!!)

class Vehiculo {
  constructor(marca, matricula, ruedas, años, velocidad, puertas) {
    this.marca = marca;
    this.matricula = matricula;
    this.ruedas = ruedas;
    this.puertas = puertas;
    this.años = años;
    this.velocidad = velocidad;
  }

  correr() {
    return (this.velocidad += 10);
  }

  frenar() {
    return (this.velocidad = 0);
  }

  aparcar() {
    return console.log("Aparcado!");
  }
}

class Coche extends Vehiculo {
  constructor(marca, matricula, ruedas, años, velocidad, puertas) {
    super(marca, matricula, ruedas, años, velocidad, puertas);
    this.consumo = "Diesel";
  }
}

class Moto extends Vehiculo {
  constructor(marca, matricula, ruedas, puertas, años) {
    super(marca, matricula, ruedas, puertas, años);
  }
}

class Patin extends Vehiculo {
  constructor(marca, matricula, ruedas, años) {
    super(marca, matricula, ruedas, años);
  }
}

class Bicicleta extends Vehiculo {
  constructor(marca, matricula, ruedas, años, speed) {
    super(marca, matricula, ruedas, años, speed);
    this.consumo = "Electrico";
  }
}


let v1 = new Coche("Tesla", "1914JWC", 4, 2, 80, 4)
let v2 = new Moto("BMW","4443CTT", 2, 0, 20);
let v3 = new Patin("XIAOMI","123", 2, 1);
let v4 = new Bicicleta("ORBEA","", 2, 4, 25);

console.log(v1.correr());
v2.frenar();
v3.aparcar();
console.log(v4.correr());

console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
