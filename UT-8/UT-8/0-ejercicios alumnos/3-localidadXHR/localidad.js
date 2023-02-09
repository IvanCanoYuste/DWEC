//?localidad=burgos
let xhr = new XMLHttpRequest();
window.onload = function () {
    document.addEventListener("change", e => {
        let localidad = document.getElementById("localidad").value
        xhr.open("GET", "arraylocalidades.php?localidad="+localidad);
        
        xhr.send();
    })


};

xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      texto = xhr.response;
      // tratar el texto;
      mostrarResultado(texto)
    }
  };
  
  xhr.onerror = function () {
    alert(`Error de red`);
  };

  function mostrarResultado(texto){
    let parrafo = document.getElementById("resultado")
    if(texto == "S"){
        parrafo.style.color = "green"
    }else{
        parrafo.style.color = "red"
    }
    parrafo.innerHTML = texto
  }
