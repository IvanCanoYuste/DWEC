let xhr = new XMLHttpRequest();

window.onload = function () {
  
  document.getElementById("url").value = window.location.href;
  document.getElementById("mostrar").addEventListener("click", (e) => {
    let archivo = document.getElementById("url").value
    
    llamar(archivo)
    
  })
};

async function llamar(url) {
  let textarea = document.getElementById("contenido");
  let response = await fetch(url);
  if (response.ok) {
    let texto = await response.text()
    textarea.textContent = texto
  } else {
    alert("Error-HTTP: " + response.status);
  }
}
