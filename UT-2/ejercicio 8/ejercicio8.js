function bonoloto() {
  let numeros = [];
  let texto = "";
  for (let i = 0; i < 6; i++) {
    numeros.push(generarAleatorio(50));
    texto += numeros[i] + " ";
  }
  console.log(texto);
  let comple = generarAleatorio(9);
  console.log("El numero complementario es:" + comple);
}

function generarAleatorio(cantidad) {
  var numero = parseInt(Math.random() * cantidad);
  return numero;
}
