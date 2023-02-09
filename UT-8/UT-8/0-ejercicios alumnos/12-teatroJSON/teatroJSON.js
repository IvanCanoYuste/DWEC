window.onload = function () {

    llamarTeatro("teatros.json")


};

let arrayCarteleraTeatro = []
let contadorTeatro = 0

async function llamarTeatro(url) {

    let response = await fetch(url);
    if (response.ok) {
        let texto = await response.json()
        desplegable(texto)
        document.getElementById("teatros").addEventListener("change", (e) => {
            llamarCartelera("cartelera.json", e.target.value)
            contadorTeatro = 0;
        })

    } else {
        console.log("No ha funcionado la conexion")
    }
}
async function llamarCartelera(url, value) {

    let response = await fetch(url);
    if (response.ok) {
        let texto = await response.json()
        crearArrayIndex(texto, value)
        crearTabla(arrayCarteleraTeatro, contadorTeatro)

        document.getElementById("primero").addEventListener("click", (e) => {
            contadorTeatro = 0
            crearTabla(arrayCarteleraTeatro, contadorTeatro)
        })

        document.getElementById("anterior").addEventListener("click", (e) => {
            if (contadorTeatro > 0) {
                contadorTeatro--
                crearTabla(arrayCarteleraTeatro, contadorTeatro)
            }

        })

        document.getElementById("siguiente").addEventListener("click", (e) => {
            if (contadorTeatro < arrayCarteleraTeatro.length-1) {
                contadorTeatro++
                crearTabla(arrayCarteleraTeatro, contadorTeatro)
            }

        })

        document.getElementById("ultimo").addEventListener("click", (e) => {
            contadorTeatro = arrayCarteleraTeatro.length - 1
            crearTabla(arrayCarteleraTeatro, contadorTeatro)
        })

    } else {
        console.log("No ha funcionado la conexion")
    }
}

function desplegable(objeto) {
    let select = document.createElement("select")
    select.setAttribute("id", "teatros")

    let option = document.createElement("option")
    option.innerHTML = "-"
    select.append(option)

    for (let teatros of objeto) {
        let option = document.createElement("option")
        option.innerHTML = teatros.teatro
        select.append(option)
    }
    document.body.append(select)
}

function crearArrayIndex(objeto, value) {
    arrayCarteleraTeatro = []
    let array = []
    for (let fecha in objeto) {
        for (let i = 0; i < objeto[fecha].length; i++) {
            if (value == objeto[fecha][i].teatro) {
                array.push(i)
            }

        }
        for (let posicion of array) {
            arrayCarteleraTeatro.push(objeto[fecha][posicion])
        }

    }
}

function crearTabla(objeto, posicion) {

    if (document.getElementById("tabla")) {
        document.getElementById("tabla").remove()
    }

    let table = document.createElement("table");
    table.setAttribute("id", "tabla")
    let contador = 0;
    let trTH = document.createElement("tr");
    let tr = document.createElement("tr");

    for (let cartelera in objeto[posicion]) {
        let th = document.createElement("th");
        let td = document.createElement("td");

        if (contador < 5) {
            th.innerHTML = cartelera;
            th.style.border = "2px solid black";
            contador++;
            trTH.append(th);
        }
        if (cartelera == "imagen") {
            let imagen = document.createElement("img")
            imagen.setAttribute("src", objeto[posicion][cartelera])
            td.append(imagen)
        } else {
            td.innerHTML = objeto[posicion][cartelera];
        }

        td.style.border = "2px solid black";
        tr.append(td);

    }
    table.append(tr);
    table.prepend(trTH);
    table.style.border = "2px solid black";
    table.style.borderCollapse = "collapse";
    document.body.append(table);
}