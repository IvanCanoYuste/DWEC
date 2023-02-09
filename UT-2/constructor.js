/********************************
 *
 * Se puede llamar a la función constructora sin paréntesis,
 *  si no se le pasan parámetros
 */
function Coche(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
  this.matriculado = false;
}
let miCoche = new Coche("Seat", "Ibiza");

/******
 *
 */
function Perro(nombre) {
  this.nombre = nombre;
  this.ladrar = function () {
    console.log("guau guau");
  };
  this.saluda = function () {
    console.log("Soy " + this.nombre + ", ¿qué tal estás?");
    this.ladrar();
  };
}
let miPerro = new Perro("Milú");
