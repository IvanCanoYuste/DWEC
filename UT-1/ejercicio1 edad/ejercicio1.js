let edad;
while (edad != "Salir") {
  edad = prompt("Introduzca su edad:\nSi quiere salir escriba: Salir");
  console.log(edad);
  if (
    (edad == null || edad < 0 || isNaN(edad) || edad == "") &&
    edad != "Salir"
  ) {
    alert("No es un dato valido");
  } else if (0 <= edad && edad <= 12) {
    alert("Niño");
  } else if (12 < edad && edad <= 26) {
    alert("Joven");
  } else if (26 < edad && edad <= 60) {
    alert("Adulto");
  } else if (60 < edad) {
    alert("Jubilado");
  }
}
