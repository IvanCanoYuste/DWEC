let table = document.getElementById("table");

table.addEventListener("mouseover", (e) => {
    let celda = e.target.closest("TD");
    if (celda) {
        celda.classList.add("highlight")
    }
        
});

table.addEventListener("mouseout", (e) => {
    let celda = e.target.closest("TD");
    if (celda) {
        celda.classList.remove("highlight")
    }
});
