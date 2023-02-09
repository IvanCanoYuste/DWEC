let xhr = new XMLHttpRequest();
let textarea = document.getElementById("contenido")
window.onload = function (){
    document.getElementById("url").value = window.location.href
    document.getElementById("mostrar").addEventListener("click",e=>{
        let archivo = document.getElementById("url").value
        
        xhr.open("GET",archivo)
    
        xhr.send();

        

        
    
    })
}


xhr.onload = function () {
    
    if (xhr.status != 200) {
      textarea.textContent = `Error ${xhr.status}: ${xhr.statusText}`;
    } else {
      texto = xhr.response;
      
      // tratar el texto;
      textarea.textContent = texto

    }


  };

  xhr.onerror = function () {
    textarea.textContent = `Error de red`;
  };


