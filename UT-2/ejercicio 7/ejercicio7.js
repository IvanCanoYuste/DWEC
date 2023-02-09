function numero() {
  let numero = pedirPantalla();
  numero = parseFloat(numero);
  document.body.innerHTML += numero.toExponential() + "/";
  document.body.innerHTML += numero.toFixed(4) + "/";
  document.body.innerHTML += numero.toString(2) + "/";
  document.body.innerHTML += numero.toString(8) + "/";
  document.body.innerHTML += numero.toString(16) + "";
}

function pedirPantalla() {
  var numero = prompt("Introduce un numero");
  return numero;
}

numero();
