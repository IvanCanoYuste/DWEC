let arr = [5, 3, 8, 1];

function filterRangeInPlace(array, num1, num2) {
  for (let i = 0; i < array.length; i++) {
    if (!(num1 <= array[i] && array[i] <= num2)) {
      arr.splice(i, 1);
      i--;
    }
  }
}

arr.forEach(function (array) {
  var contador = 0;
  num1 = 1;
  num2 = 4;
  if (!(num1 <= array[contador] && array[contador] <= num2)) {
    arr.splice(contador, 1);
  } else contador++;
});
