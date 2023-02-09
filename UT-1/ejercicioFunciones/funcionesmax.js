let numero1 = prompt("Escribe el primer numero");
let numero2 = prompt("Escribe el primer numero");
let numero3 = prompt("Escribe el primer numero");

function valorMaximo(numero1, numero2, numero3) {
  if (numero1 == undefined && numero2 == undefined && numero3 == undefined) {
    return 0;
  }
  if (numero1 == null || numero1 == "" || isNaN(numero1) || numero1 < 0) {
    numero1 = undefined;
  }
  if (numero2 == null || numero2 == "" || isNaN(numero2) || numero2 < 0) {
    numero2 = undefined;
  }
  if (numero3 == null || numero3 == "" || isNaN(numero3) || numero3 < 0) {
    numero3 = undefined;
  }

  let numeroMayor;
  if (numero1 >= numero2 && numero1 >= numero3) {
    numeroMayor = numero1;
  } else if (numero2 >= numero3) {
    numeroMayor = numero2;
  } else numeroMayor = numero3;
  return numeroMayor;
}

valorMaximo(numero1, numero2, numero3);
