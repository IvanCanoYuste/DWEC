// Definir un objeto con propiedades
let miCoche = {
  marca: "Seat",
  modelo: "Ibiza",
  matriculado: true,
  "nombre propietario": "Jose",
  2022: 522,
};

// Acceder a las propiedades
console.log(miCoche.modelo);
console.log(miCoche["modelo"]);
let propiedad = "modelo";
console.log(miCoche[propiedad]);
console.log(miCoche["m" + "o" + "d" + "elo"]);

console.log(miCoche["nombre propietario"]);
console.log(miCoche["2022"]);

// Acceso a propiedades que no existen -> undefined
console.log(miCoche.hajhfds); // undefined

// Operador in: si una propiedad está en un objeto
console.log("jkljklj" in miCoche); // false

// Crear una propiedad asignándole un valor
miCoche.estado = "bueno";
console.log(miCoche.estado);

// Eliminar una propiedad: delete
delete miCoche.estado;
console.log(miCoche.estado); // undefined

// Bucle fon in
for (const propiedad in miCoche) {
  console.log(
    "La propiedad " + propiedad + "tiene el valor: " + miCoche[propiedad]
  );
}

// Otras formas de crear un objeto
let miCoche2 = {};
miCoche2.marca = "Peugeot";

let miCoche3 = new Object();
miCoche3.marca = "Kya";

/*******************************
 * MÉTODOS

    dos sintaxis: ver en el ejemplo
    this
      permite accedemos a las propiedades y métodos del
      objeto cuando estamos dentro del objeto

********************************/
// Crear un objeto con una propiedad que es una función
let miPerro = {
  nombre: "Milú",
  ladrar: function () {
    console.log("guau guau");
  },
  saluda() {
    console.log("Soy " + this.nombre + ", ¿qué tal estás?");
    this.ladrar();
  },
};

// Llamar al método
miPerro.ladrar();
miPerro["ladrar"]();
miPerro.saluda();
miPerro["saluda"]();

let matrix = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
let matrix2 = [];
function array() {
  console.log(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix2.push(matrix[i][j] * 2);
    }
  }
  return matrix2;
}

array();
