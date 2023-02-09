let hora = 9;
let minutos1 = 0;
let minutos2 = 0;
let condicion = true;

do {
  document.body.innerHTML += hora + ":" + minutos1 + minutos2 + "<br>";
  minutos2 = minutos2 + 5;
  if (minutos2 == 10) {
    minutos2 = 0;
    minutos1++;
  }
  if (minutos1 == 6) {
    minutos1 = 0;
    hora++;
  }
  if (hora == 21 && minutos1 == 3 && minutos2 == 5) {
    condicion = false;
  }
} while (condicion);
