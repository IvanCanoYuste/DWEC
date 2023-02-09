let xhr = new XMLHttpRequest();
window.onload = function () {
  llamar("portafolio.json")
};

async function llamar(url) {
  let textarea = document.getElementById("contenido");
  let response = await fetch(url);
  if (response.ok) {
    let objeto = await response.json()
    crearTabla(objeto)
  } else {
    alert("Error-HTTP: " + response.status);
  }
}

function crearTabla(objeto) {
  let contenido = document.getElementById("contenido");
  let table = document.createElement("table");
  let contador = 0;
  let trTH = document.createElement("tr");
  for (let fecha in objeto) {
    for (let i = 0; i < objeto[fecha].length; i++) {
      let tr = document.createElement("tr");
      for (let modelo in objeto[fecha][i]) {
        let th = document.createElement("th");
        let td = document.createElement("td");
        if (contador < 3) {
          th.innerHTML = modelo;
          th.style.border = "2px solid black";
          contador++;
          trTH.append(th);
        }
        td.innerHTML = objeto[fecha][i][modelo];
        td.style.border = "2px solid black";
        tr.append(td);
      }
      table.append(tr);
    }
  }
  table.prepend(trTH);
  table.style.border = "2px solid black";
  table.style.borderCollapse = "collapse";
  contenido.append(table);
}
