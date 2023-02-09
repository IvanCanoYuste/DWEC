window.onload = function () {

    llamar("viajes.json")


};


async function llamar(url) {

    let response = await fetch(url);
    if (response.ok) {
        let texto = await response.json()
        //console.log(texto)
        viajesOrigen(texto)
        document.getElementById("origen").addEventListener("change", (e) => {
            viajesDestino(texto, e.target.value)
        })
    } else {
        console.log("No ha funcionado la conexion")
    }
}

function viajesOrigen(objeto) {
    for (let select in objeto) {
        for (let select2 in objeto[select]) {
            if (select2 == "ORIGEN") {
                let option = document.createElement("option")
                option.innerHTML = objeto[select][select2]
                document.getElementById("origen").append(option)
            }
        }
    }
}
function viajesDestino(objeto, value) {

    if (document.getElementById("destino")) {
        document.getElementById("destino").remove()
    }

    let selectOrigen = document.createElement("select")
    selectOrigen.setAttribute("id", "destino")
    for (let select in objeto) {
        for (let select2 in objeto[select]) {
            if (select2 == "DESTINOS" && value == objeto[select].ORIGEN) {
                for (let select3 in objeto[select][select2]) {
                    if (typeof (objeto[select][select2][select3]) == "string") {
                        let option = document.createElement("option")
                        option.innerHTML = objeto[select][select2][select3]
                        selectOrigen.append(option)
                    } else {
                        for (let destinos of objeto[select][select2][select3]) {
                            let option = document.createElement("option")
                            option.innerHTML = destinos
                            selectOrigen.append(option)
                        }
                    }
                    //console.log(objeto[select][select2][select3])
                }
            }
        }
    }
    document.body.append(selectOrigen)
}
