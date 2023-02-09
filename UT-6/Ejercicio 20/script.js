window.onload = function () {
  insertar();
  revelarCarta();
};
let oculto = "./Simpson/numbers-1109572_640.png";
let boton = document.getElementById("reiniciar");
boton.addEventListener("click", () => {
  location.reload();
});

let puntuacion = 0;
let bucle;

let cartas = [
  "./Simpson/AbrahamSimpson.png",
  "./Simpson/BartSimpson.png",
  "./Simpson/HomerSimpson.png",
  "./Simpson/LisaSimpson.png",
  "./Simpson/MaggieSimpson.png",
  "./Simpson/MargeSimpson.png",
  "./Simpson/AbrahamSimpson.png",
  "./Simpson/BartSimpson.png",
  "./Simpson/HomerSimpson.png",
  "./Simpson/LisaSimpson.png",
  "./Simpson/MaggieSimpson.png",
  "./Simpson/MargeSimpson.png",
];

function muestraPuntuacion() {
  let div = document.getElementById("puntuacion");
  div.innerHTML = puntuacion;
}

function insertar() {
  muestraPuntuacion();

  aleatorio();
  let td = document.querySelectorAll("td");

  for (let i = 0; i < cartas.length; i++) {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", oculto);
    imagen.setAttribute("class", "oculto");
    td[i].append(imagen);
  }
}

function revelarCarta() {
  let td = document.querySelectorAll("td");
  let carta1 = "";
  let carta2 = "";
  let contador = 0;
  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener("click", (e) => {
      if (e.target.getAttribute("class") == "acertada") {
        return;
      }
      contador++;
      if (puntuacion == 6) {
        return;
      }
      if (contador > 2) {
        return false;
      }
      e.target.setAttribute("src", cartas[i]);

      if (contador == 1) {
        carta1 = e;
      }
      if (contador == 2) {
        carta2 = e;

        if (comprobar(carta1, carta2)) {
          carta1.target.setAttribute("class", "acertada");
          carta2.target.setAttribute("class", "acertada");
          puntuacion++;
          muestraPuntuacion();
          contador = 0;
          if (puntuacion == 6) {
            setTimeout(() => {
              alert("¡¡Ganaste!!");
            }, 1);
          }
        } else {
          setTimeout(() => {
            carta1.target.setAttribute("src", oculto);
            carta1.target.setAttribute("class", "oculto");
            carta2.target.setAttribute("src", oculto);
            carta2.target.setAttribute("class", "oculto");
            contador = 0;
          }, 1000);
        }
      }
    });
  }
}

function aleatorio() {
  cartas.sort(() => 0.5 - Math.random());
}

function comprobar(carta1, carta2) {
  if (
    carta1.target.getAttribute("src") == carta2.target.getAttribute("src") &&
    carta1.target != carta2.target
  ) {
    console.log("correcto");
    return true;
  } else return false;
}
