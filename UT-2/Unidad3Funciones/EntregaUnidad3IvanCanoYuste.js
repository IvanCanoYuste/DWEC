"use strict";

/**
 * @author Ivan Cano Yuste
 *
 */

//Creación de la clase elemento que tiene dos metodos.
class Elemento {
  //Declaración del constructor
  constructor(
    codElemento = 0,
    descElemento = "",
    fechaAlta = "",
    fechaBaja = ""
  ) {
    this.codElemento = codElemento;
    this.descElemento = descElemento;
    this.fechaAlta = fechaAlta;
    this.fechaBaja = fechaBaja;
  }
  //Declaracion del metodo baja
  baja() {
    this.fechaBaja = new Date();
  }
  //Declaración del metodo consulta
  consulta() {
    console.log(
      "Codigo del elemento: " +
        this.codElemento +
        "\n" +
        "Descripción del elemento: " +
        this.descElemento +
        "\n" +
        "Fecha alta: " +
        this.fechaAlta +
        "\n" +
        "Fecha baja: " +
        this.fechaBaja
    );
  }
}
//Declaracion del array inventario.
let inventario = [];

//Declaracion de la función menú que es la que principal.
function menu() {
  let seguir = true;
  while (seguir) {
    let opcion = prompt(
      "Elija la opción:\n1.-Dar alta de producto.\n2.-Dar baja de producto.\n3.-Mostrar por consola el inventario.\n4.-Salir"
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
          seguir = false;
          break;
      }
    }
  }
}
//Llamada del programa para que arranque el menu cada vez que ejecutamos el programa.
menu();

//Declaracion funcion alta.
function alta() {
  let codElemento = prompt("Introduce el codigo del elemento");
  let descElemento = prompt("Introduce la descripcion del elemento");

  codElemento = parseInt(codElemento);
  let seguir = true;

  do {
    //Comprobamos que si es un numero el cod de elemento que se introduce por pantalla o es mayor o igual que 0.
    if (isNaN(codElemento) && codElemento >= 0) {
      alert("No es un numero");
      codElemento = prompt("Introduce el codigo del elemento");
      codElemento = parseInt(codElemento);
    } else {
      //Si es un numero recorremos el array hasta intentar encontrar un elemento con ese mismo codigo, si es el caso pasamos a false la variable booleana.
      inventario.forEach((datos) => {
        if (datos.codElemento == codElemento) {
          seguir = false;
        }
      });
      //Si la variable booleana es false significa que en este punto ha llegado un codigo que ya estaba en algun otro elemento.
      if (seguir == false) {
        alert("Ese numero de codigo ya esta dado de alta\n ");
        //Le damos la opcion de intentarlo de nuevo o salir.
        let comprobar = prompt(
          "Si quieres volver a intentar introduce 1 y si quieres salir introduce 0"
        );
        comprobar = parseInt(comprobar);
        //Si quiere continuar le volvemos a pedir un codgio.
        if (comprobar == 1) {
          codElemento = prompt("Introduce el codigo del elemento");
          codElemento = parseInt(codElemento);
          seguir = true;
        }
        //Sino salimos con la variable booleana en false.
        else if (comprobar == 0) {
          seguir = false;
        }
      }
      //Si ha introducido un codigo de elemento que no esta se crea un objeto de la clase elemento con ese cod y se añade al array inventario.
      else if (seguir == true) {
        let elemento = new Elemento(codElemento, descElemento, new Date());
        inventario.push(elemento);
        seguir = false;
      } else if (seguir == false) {
        alert("El codigo esta repetido");
      }
    }
  } while (seguir);
}

//Declaracion de la funcion baja
function baja() {
  let codElemento = prompt("Introduce el codigo del elemento");
  codElemento = parseInt(codElemento);
  let existe = false;
  do {
    //Comprobamos que el cod de elemento se encuentra dentro del array de inventario, si es asi se le añade una fecha de baja.
    inventario.forEach((datos) => {
      if (datos.codElemento == codElemento) {
        datos.baja();
        existe = true;
      }
    });
    //Si el cod de elemento no existe se le enseña un mensaje por pantalla.
    if (existe == false) {
      alert(
        "El codigo no existe Si quieres volver a intentarlo pulsa 1 sino pulsa 0"
      );
      //Se le da la misma opcion que antes de si quiere volver a intentarlo.
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

//Declaracion de la funcion consultar.
function consultar() {
  //Recorremos el array y por cada elemento llamamos al metodo de la clase elemento para que nos muestre por consola el inventario.
  inventario.forEach((datos) => datos.consulta());
}

//Declaracion de la funcion buscarCodigo.
function buscarCodigo(codigo) {
  //Buscamos el primero que cumpla la condicion que le imponemos, en este caso ya que el codigo de elemento no se puede repetir con encontrar el primero nos sirve.
  return console.log(inventario.find((cod) => cod.codElemento === codigo));
}

//Declaracion de la funcion buscar cadena mediante el metodo find.
function buscarCadenasFind(cadena) {
  let subarray = [];
  //Lo primero que hacemos es copiar el array inventario a un subarray para no modificarlo.
  for (let i = 0; i < inventario.length; i++) {
    subarray.push(inventario[i]);
  }
  let subarray2 = [];
  //Una vez copiado guardamos en una variable el primer elemento que incluya la cadena.
  let elemento = subarray.find((cod) => cod.descElemento.includes(cadena));
  let contador = 0;
  //Recorremos el array hasta encontrar el primer elemento que estamos buscando.
  for (contador = 0; contador < subarray.length; contador++) {
    if (subarray[contador] == elemento) {
      //Lo que realizamos a continuacion es borrar los elementos que tenemos antes del elemento que nosotros estamos buscando. Para ello ya que sabemos cuantos elementos hemos recorrido
      //por el for anterior, realizamos otro bucle que recorra todos los elementos menos el que estamos buscando, por eso ponemos solamente menor que en la igualdad.
      for (let i = 0; i < contador; i++) {
        //Por cada vuelta del bucle borramos el primero que queda en el array, asi no tenemos que preocuparnos por las posiciones nuevas que van tomando los elementos.
        subarray.shift();
      }
      //Una vez que se hayan borrado todos los elementos que no deseabamos y tenemos en la primera posicion el que estamos buscando, lo añadimos en otro array el cual devolveremos al final de la funcion.
      subarray2.push(subarray[0]);
      //Una vez añadido y guardado en el otro array podemos borrarlo.
      subarray.shift();
      //Una vez borrado volvemos a localizar el siguiente elemento que queremmos localizar.
      elemento = subarray.find((cod) => cod.descElemento.includes(cadena));
      //Igualamos la variable contador que es la variable del primer bucle a -1 para que una vez vuelva al bucle y le sume 1 vuelva a empezar por la posicion 0 del array.
      contador = -1;
    }
  }
  //Devolvemos el array formado por los elementos que buscabamos.
  return subarray2;
}
//Declaracion de la funcion buscarCadenas mediante el metodo filter.
function buscarCadenasFilter(cadena) {
  //El metodo filter nos permite devolver en un array los elementos que buscamos.
  return inventario.filter((cod) => cod.descElemento.includes(cadena));
}

//Declaracion de la clase Aramrio que desciende de la clase Elemento
class Armario extends Elemento {
  //Declaracion del constructor
  constructor(
    codElemento,
    descElemento,
    alto,
    ancho,
    fondo,
    fechaAlta,
    fechaBaja
  ) {
    //Ya que son variables del la clase padre se las inicializa con super.
    super(codElemento, descElemento, fechaAlta, fechaBaja);
    this.alto = alto;
    this.ancho = ancho;
    this.fondo = fondo;
  }
  //Declaracion del metodo consulta que sobrescribe al metodo de la clase padre.
  consulta() {
    console.log(
      "Codigo del elemento: " +
        this.codElemento +
        "\n" +
        "Descripción del elemento: " +
        this.descElemento +
        "\n" +
        "Fecha alta: " +
        this.fechaAlta +
        "\n" +
        "Fecha baja: " +
        this.fechaBaja +
        "Alto: " +
        this.alto +
        "\n" +
        "Ancho: " +
        this.ancho +
        "\n" +
        "Fondo: " +
        this.fondo
    );
  }
}
