let numero = +prompt("¿De que numero quieres la tabla?");
if (isNaN(numero)) {
  console.log("No es un numero");
} else {
  for (let step = 0; step < 11; step++) {
    console.log(step + "x" + numero + "=" + step * numero);
  }
}
let a = undefined;
alert(a);
