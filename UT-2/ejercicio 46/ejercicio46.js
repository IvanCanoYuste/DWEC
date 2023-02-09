function hora() {
  let fecha = new Date();
  let horas = fecha.getHours();
  let min = fecha.getMinutes();
  let sec = fecha.getSeconds();

  document.getElementById("hora").innerHTML = horas + ":" + min + ":" + sec;
  setInterval(hora, 1000);
}

hora();
