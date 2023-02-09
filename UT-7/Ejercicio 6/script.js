document.getElementById("miFormulario").addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  console.log(data);

  for (datos in data) {
    validaciones(datos, data, e);
  }
});

function validaciones(datos, data, e) {
  if (datos == "fecha") {
    let regex = /^[2][0-9]{3}-[0-1][0-9]-[0-3][0-9]$/;
    if (regex.test(data[datos])) {
      e.target.querySelector("#fecha").style.background = "green";
    } else {
      e.target.querySelector("#fecha").style.background = "red";
    }
  } else if (datos == "cocinero") {
    let regex = /^[A-Z]{2}\W[0-9]{4}$/;
    if (regex.test(data[datos])) {
      e.target.querySelector("#cocinero").style.background = "green";
    } else {
      e.target.querySelector("#cocinero").style.background = "red";
    }
  } else if (datos == "destinatario") {
    let regex = /^[A-Z]{2,3}_[a-z]+:[0-9]{4}$/;
    if (regex.test(data[datos])) {
      e.target.querySelector("#destinatario").style.background = "green";
    } else {
      e.target.querySelector("#destinatario").style.background = "red";
    }
  } else if (datos == "gramos") {
    let regex = /(^[1-4][0-9]{3}$)|(^[0-9]{3}$)|(^5000$)/;
    if (regex.test(Number(data[datos]))) {
      e.target.querySelector("#gramos").style.background = "green";
    } else {
      e.target.querySelector("#gramos").style.background = "red";
    }
  } else if (datos == "composicion") {
    let regex =
      /((^[1-4][0-9]{3})|(^[0-9]{3})|(^5000))g(([A-Z]{1,2}[0-9]{0,1}){2})$/;
    if (regex.test(data[datos])) {
      e.target.querySelector("#composicion").style.background = "green";
    } else {
      e.target.querySelector("#composicion").style.background = "red";
    }
  } else if (datos == "numCuenta") {
    let regex = /[A-Z]{2}[0-9]{2}-[0-9]{12}-/;
    if (sumaLetras(data[datos])) {
      if (regex.test(data[datos])) {
        e.target.querySelector("#numCuenta").style.background = "green";
      } else {
        e.target.querySelector("#numCuenta").style.background = "red";
      }
    }
  }
}

function sumaLetras(string) {
  let valorPrimeraLetra = Number(string.charCodeAt(0) - ("A".charCodeAt() - 1));
  let valorSegundaLetra = Number(string.charCodeAt(1) - ("A".charCodeAt() - 1));

  let suma = valorPrimeraLetra + valorSegundaLetra;

  let primerNumero = +string[2];
  let segundoNumero = +string[3];

  let numero = primerNumero + segundoNumero;

  if (suma == numero) {
    return true;
  } else {
    return false;
  }
}

function ultimosDigitos(){

}


