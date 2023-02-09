window.onload = function () {
  
      llamar("series.json")
      
  };
  
  async function llamar(url) {
    
    let response = await fetch(url);
    if (response.ok) {
      let texto = await response.json()
      crearTabla(texto)
    } else {
      console.log("No ha funcionado la conexion")
    }
  }

  function crearTabla(objeto) {
    console.log(objeto)
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
          if (contador < 5) {
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