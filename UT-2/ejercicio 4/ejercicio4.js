function vehiculo(matricula, precio, velMax) {
  this.matricula = matricula;
  this.precio = precio;
  this.velMax = velMax;
  this.comenzar = function () {
    console.log("Encender motor");
  };
  this.parar = function () {
    console.log("Apagar motor");
  };
  this.distanciaMax = function (tiempo) {
    return this.velMax * tiempo;
  };
  this.toString = function () {
    return "Coche con matricula" + this.matricula;
  };
  this.valueOf = function () {
    return this.precio;
  };
}
