//Ejercicio 2
for (let numero = 1; numero < 101; numero++) {
  if (numero % 2 == 0 && numero % 3 == 0) {
    document.body.innerHTML +=
      "El " + numero + "es multiplo de 2 y de 3" + "<br>";
  } else if (numero % 2 == 0) {
    document.body.innerHTML += "El " + numero + "es multiplo de 2" + "<br>";
  } else if (numero % 3 == 0) {
    document.body.innerHTML += "El " + numero + "es multiplo de 3" + "<br>";
  } else {
    document.body.innerHTML += "El " + numero + "<br>";
  }
}
