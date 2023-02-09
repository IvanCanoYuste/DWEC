onload = function () {
  cargarRespuestasAnteriores()
  recibir();
  borrar();
  
};


function borrar(){
  let borrar = document.getElementById("borrarLocalStorage")
borrar.addEventListener("click",e=>{
  localStorage.removeItem("respuestas")
})
}

let respuestasCorrectas = [
  "Velocidad",
  "Patricios",
  "Monarquia electiva",
  "Burgueses",
  "Velocidad",
];
let respuestasRecibidas = {};
let objetoRespuestas;
function recibir() {
  let formulario = document.getElementById("miFormulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    
    guardarRespuestas(e, data);
    comprobarCorrectas(e);
    guardarLocalStorage();
  });
}

function guardarRespuestas(event, data) {
  for (let i = 1; i < 6; i++) {
    let respuesta = "respuesta" + i;
    let introducido = false;
    for (let datos in data) {
      if (respuesta == datos) {
        respuestasRecibidas[respuesta] = data[datos];
        introducido = true;
        break;
      } else {
        introducido = false;
      }
    }
    if (!introducido) {
      respuestasRecibidas[respuesta] = "vacio";
    }
  }
}

function guardarLocalStorage() {
  

  localStorage.setItem("respuestas", JSON.stringify(respuestasRecibidas));
}

function comprobarCorrectas(e) {
  let correctas = 0
  let incorrectas = 0;
  let i = 0;
  for (let datos in respuestasRecibidas) {
    let enunciado = e.target.querySelectorAll("label");
    if (respuestasRecibidas[datos] == "vacio") {
      enunciado[i].style.background = "red";
    } else if (respuestasRecibidas[datos] == respuestasCorrectas[i]) {
      enunciado[i].innerHTML += "✔";
      correctas++
    } else {
      enunciado[i].innerHTML += "❌";
      incorrectas++
    }

    i++;
  }

  document.getElementById("resultado").append("Las respuestas correstas son: "+correctas+" y las respuestas incorrectas son: "+incorrectas)
}

function cargarRespuestasAnteriores(){
  let storage = JSON.parse(localStorage.getItem("respuestas"))
  let formulario = document.getElementById("miFormulario");
  let divs = formulario.querySelectorAll("div")
  let i = 0;
  for(let datos in storage){
    let numRespuestaDiv = divs[i].getAttribute("id")
    
    if(numRespuestaDiv == datos && storage[datos] != "vacio"){
      let opciones = divs[i].querySelectorAll("input")
      for(let j = 0;j<opciones.length;j++){
        if(opciones[j].value == storage[datos]){
          opciones[j].checked = true
        }
      }
    }
    i++
  }

}