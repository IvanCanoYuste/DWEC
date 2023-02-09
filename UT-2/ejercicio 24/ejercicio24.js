let map1 = new Map([
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 0],
]);
if (localStorage.getItem("resultado") != null) {
  console.log(localStorage.getItem("resultado"));
}

let resultado = 0;
for (let i = 0; i < 36000; i++) {
  let dado1 = parseInt(Math.random() * (7 - 1) + 1);
  let dado2 = parseInt(Math.random() * (7 - 1) + 1);

  let resultado = dado1 + dado2;

  map1.set(resultado, map1.get(resultado) + 1);
}
for (let item of map1) {
  console.log(item[0] + " ha salido " + item[1] + " veces");
}

localStorage.setItem("resultado", JSON.stringify(Array.from(map1.entries())));
