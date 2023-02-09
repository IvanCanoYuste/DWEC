let date = new Date(2012, 0, 3);
function getLocalDay(date) {
  if (date.getDay() == 0) {
    return "7";
  } else return date.getDay();
}
