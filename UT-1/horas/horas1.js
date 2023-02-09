let hora = 9;
let minutos1 = 0;
let minutos2 = 0;

while (hora < 22) {
  document.body.innerHTML += hora + ":" + minutos1 + minutos2 + "<br>";
  minutos1 += 3;
  if (minutos1 == 6) {
    minutos1 = 0;
    hora++;
  }
}
