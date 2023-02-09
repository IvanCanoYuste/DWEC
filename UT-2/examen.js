/*
@auhtor: Ivan Cano Yuste
*/

let cadena = "tierra agua fuego helicoptero";
let array = ["tierra", "agua", "fuego", "helicoptero"];

/**
 * Ejercicio 1
 */
function inicialMayusculas(cadena) {
  let cadenaMayusculas = "";
  let subString = [];

  subString = cadena.split("");
  for (let i = 0; i < subString.length; i++) {
    if (i == 0) {
      subString[i] = subString[i].toUpperCase();
    } else if (subString[i] == " ") {
      subString[i + 1] = subString[i + 1].toUpperCase();
    }
  }
  subString = subString.splice(0, 20);
  cadenaMayusculas = subString.join("");
  return cadenaMayusculas;
}
/**
 * Ejercicio 2
 */
function copiarArray(array) {
  let arrayCopia = [];
  arrayCopia = array.splice(0, array.length);
  return arrayCopia;
}
/**
 * Ejercicio 3
 */
function vaciarArray(array) {
  array.splice(0);
  return array;
}
/**
 * Ejercicio 4
 */
function Alumno(dni, nombre, estudios, curso, año) {
  function cambiar() {
    let dniArray = [];
    dniArray = dni.split("").reverse();
    dniArray[0] = dniArray[0].toUpperCase();
    dniArray.reverse();
    return dniArray.join("");
  }
  this.dni = cambiar();

  this.dni = function () {
    let dniArray = [];
    dniArray = dni.split("").reverse();
    dniArray[0] = dniArray[0].toUpperCase();
    dniArray.reverse();
    return dniArray.join("");
  };
  this.nombre = inicialMayusculas(nombre);
  this.estudios = function () {
    if (estudios == "") {
      return "No ESTUDIOS";
    } else {
      let cursoMayusculas = "";
      cursoMayusculas = estudios.toUpperCase();
      return cursoMayusculas;
    }
  };
  this.curso = function () {
    if (curso == "") {
      return 0;
    } else return curso;
  };
  this.año = function () {
    if (año == "") {
      return 2022;
    } else return año;
  };
}

alumno = new Alumno("71483525r", "ivan", "DAW", "1", 2022);

console.log(alumno);
/**
 * Ejercicio 5
 */

let clase = {
  alumnos: [],
};

/**
 * Ejercicio 6
 */

function adivina(valorMin, valorMax) {
  let error = "No son valores correctos";
  let numeroAleatorio = 0;
  let condicion = false;
  if (valorMin <= 0 || valorMax <= 0) {
    return error;
  } else if (valorMax < valorMin) {
    return error;
  } else if (valorMax == "" || valorMin == "") {
    return error;
  }

  numeroAleatorio = parseInt(Math.random() * (valorMax - valorMin) + valorMin);

  while (!condicion) {
    let numeroUsuario = prompt(
      "Introduce un valor entre " + valorMin + " y " + valorMax
    );
    if (
      numeroUsuario == 0 ||
      numeroUsuario == null ||
      numeroUsuario == undefined
    ) {
      alert("El numero era " + numeroAleatorio);
    } else if (numeroUsuario < 0 || isNaN(numeroUsuario)) {
      alert(error);
      break;
    } else if (numeroUsuario > 0) {
      numeroUsuario = parseInt(numeroUsuario);
      if (numeroUsuario < numeroAleatorio) {
        alert("Es un numero mayor");
      } else alert("Es un numero menor");
    } else if (numeroAleatorio == numeroUsuario) {
      condicion = true;
      alert("Has acertado!!");
    }
  }
}
