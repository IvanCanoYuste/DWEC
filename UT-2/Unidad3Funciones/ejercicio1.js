"use strict";
class Elemento {
  constructor(codElemento, descElemento, fechaAlta = "", fechaBaja = "") {
    this.codElemento = codElemento;
    this.descElemento = descElemento;
    this.fechaAlta = fechaAlta;
    this.fechaBaja = fechaBaja;
  }
}

let inventario = [];

function menu() {
  let seguir = true;
  while (seguir) {
    let opcion = prompt(
      "Elija la opción:\n1.-Dar alta de producto.\n2.-Dar baja de producto.\nMostrar"
    );
    if (isNaN(opcion) || opcion <= 0 || opcion > 4) {
      alert("no es opcion valida");
    } else {
      opcion = parseInt(opcion);
      switch (opcion) {
        case 1:
          alta();
          break;
        case 2:
          baja();
          break;
        case 3:
          consultar();
          break;
        case 4:
          console.log("Opcion 4");
          seguir = false;
          break;
      }
    }
  }
}

menu();

function alta() {
  let codElemento = prompt("Introduce el codigo del elemento");
  let descElemento = prompt("Introduce la descripcion del elemento");

  codElemento = parseInt(codElemento);
  let seguir = true;

  do {
    if (isNaN(codElemento)) {
      alert("No es un numero");
      codElemento = prompt("Introduce el codigo del elemento");
      codElemento = parseInt(codElemento);
    } else {
      console.log("vuelta");
      inventario.forEach((datos) => {
        if (datos.codElemento == codElemento) {
          seguir = false;
        }
      });
      if (seguir == false) {
        alert("Ese numero de codigo ya esta dado de alta\n ");
        let comprobar = prompt(
          "Si quieres volver a intentar introduce 1 y si quieres salir introduce 0"
        );
        comprobar = parseInt(comprobar);
        if (comprobar == 1) {
          codElemento = prompt("Introduce el codigo del elemento");
          codElemento = parseInt(codElemento);
          seguir = true;
        } else if (comprobar == 0) {
          seguir = false;
        }
      } else if (seguir == true) {
        let elemento = new Elemento(codElemento, descElemento, new Date());
        inventario.push(elemento);
        seguir = false;
      } else if (seguir == false) {
        alert("El codigo esta repetido");
      }
    }
  } while (seguir);
}

function baja() {
  let codElemento = prompt("Introduce el codigo del elemento");
  codElemento = parseInt(codElemento);
  let existe = false;
  do {
    inventario.forEach((datos) => {
      if (datos.codElemento == codElemento) {
        datos.fechaBaja = new Date();
        existe = true;
      }
    });
    if (existe == false) {
      alert(
        "El codigo no existe Si quieres volver a intentarlo pulsa 1 sino pulsa 0"
      );
      let comprobar = prompt(
        "Si quieres volver a intentar introduce 1 y si quieres salir introduce 0"
      );
      comprobar = parseInt(comprobar);
      if (comprobar == 1) {
        codElemento = prompt("Introduce el codigo del elemento");
        codElemento = parseInt(codElemento);
        existe = false;
      } else if (comprobar == 0) {
        existe = true;
      }
    }
  } while (!existe);
}

function consultar() {
  inventario.forEach((element) => console.log(element));
}
