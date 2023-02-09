function tabla(filas, columnas) {
  tabla = document.createElement("table");
  tabla.style.margin = "0px auto";
  for (let i = 0; i < filas; i++) {
    let filaTabla = document.createElement("tr");
    tabla.appendChild(filaTabla);
    for (let j = 0; j < columnas; j++) {
      let columnaTabla = document.createElement("td");
      columnaTabla.style.border = "1px solid black";
      columnaTabla.append("Hola");
      filaTabla.appendChild(columnaTabla);
    }
  }
  document.body.appendChild(tabla);
  return tabla;
}

let tablaAntigua = tabla(5, 4);

function primeraFila(tabla, columnas) {
  let fila = document.createElement("tr");
  for (let i = 0; i < columnas; i++) {
    let columnaNueva = document.createElement("td");
    columnaNueva.append("Adios");
    fila.appendChild(columnaNueva);
  }
  tabla.prepend(fila);
}

function removeFila(tabla, indice) {
  let borrar = tabla.rows[indice];
  borrar.remove();
}

primeraFila(tablaAntigua, 2);
let titulo = document.createElement("h1");
titulo.append("Esta es mi tabla");
tablaAntigua.before(titulo);

let imagen = document.createElement("img");
imagen.setAttribute("src", "foto.png");
tablaAntigua.after(imagen);

removeFila(tablaAntigua, 3);

let tablaNueva = tablaAntigua.cloneNode(true);

tablaAntigua.after(tablaNueva);
