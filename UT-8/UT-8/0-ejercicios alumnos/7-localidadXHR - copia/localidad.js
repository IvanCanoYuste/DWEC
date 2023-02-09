//?localidad=burgos
let xhr = new XMLHttpRequest();
window.onload = function () {
    document.addEventListener("change", e => {
        let localidad = document.getElementById("localidad").value
        llamar("arraylocalidades.php?localidad="+localidad);
        
        
    })


};

async function llamar(url) {
  let textarea = document.getElementById("contenido");
  let response = await fetch(url);
  if (response.ok) {
    let objeto = await response.text()
    console.log(objeto)
    mostrarResultado(objeto)
  } else {
    alert("Error-HTTP: " + response.status);
  }
}

  function mostrarResultado(texto){
    let parrafo = document.getElementById("resultado")
    if(texto == "S"){
        parrafo.style.color = "green"
    }else{
        parrafo.style.color = "red"
    }
    parrafo.innerHTML = texto
  }
