let date = new Date();
function getSecondsToday() {
  let horas,
    minutos,
    segundos = 0;

  horas = date.getHours();
  minutos = date.getMinutes();
  segundos = date.getSeconds();

  minutos += horas * 60;
  segundos += minutos * 60;
  return segundos;
}
