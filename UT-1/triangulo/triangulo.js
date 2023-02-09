function triangulo() {
  let numero = prompt("Numero que recibe por parametro");
  if (numero == "") {
    numero = 7;
  }
  if (numero <= 0 || isNaN(numero) || numero == null) {
    alert("No es un valor valido");
  }
  for (let i = 0; i <= numero; i++) {
    for (let j = 0; j < i; j++) {
      document.body.innerHTML += "#";
    }
    document.body.innerHTML += "<br>";
  }
}

let triangulo = function () {
  let numero = prompt("Numero que recibe por parametro");
  if (numero == "") {
    numero = 7;
  }
  if (numero <= 0 || isNaN(numero) || numero == null) {
    alert("No es un valor valido");
  }
  for (let i = 0; i <= numero; i++) {
    for (let j = 0; j < i; j++) {
      document.body.innerHTML += "#";
    }
    document.body.innerHTML += "<br>";
  }
};

let triangulo = () => {
  let numero = prompt("Numero que recibe por parametro");
  if (numero == "") {
    numero = 7;
  }
  if (numero <= 0 || isNaN(numero) || numero == null) {
    alert("No es un valor valido");
  }
  for (let i = 0; i <= numero; i++) {
    for (let j = 0; j < i; j++) {
      document.body.innerHTML += "#";
    }
    document.body.innerHTML += "<br>";
  }
};

triangulo();
