function tablero(fila, columna) {
  let tableroEscrito = "";
  let contador = 0;
  for (let f = 0; f < fila; f++) {
    for (let c = 0; c < columna; c++) {
      if (f % 2 == 0) {
        if (c % 2 == 0) {
          document.body.innerHTML += "#";
        } else document.body.innerHTML += "&nbsp";
      } else {
        if (c % 2 == 0) {
          document.body.innerHTML += "&nbsp";
        } else {
          if (contador < 3) {
            document.body.innerHTML += "#";
            contador++;
          }
        }
      }
    }
    contador = 0;
    document.body.innerHTML += "<br>";
  }
}
tablero(5, 5);
