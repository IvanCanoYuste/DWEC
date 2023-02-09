let cuenta = {
  Titular: "Alex",
  saldo: 0,
  ingresar(cant) {
    this.saldo += cant;
  },
  extraer(cant) {
    this.saldo -= cant;
  },
  informar() {
    console.log("El saldo es de", this.saldo);
  },
};

function Cuenta() {
  this.titular = "Alex";
  this.saldo = 0;
  this.ingresar = function (cant) {
    this.saldo += cant;
  };
  this.extraer = function (cant) {
    this.saldo -= cant;
  };
  this.informar = function () {
    console.log("El saldo es de", this.saldo);
  };
}
