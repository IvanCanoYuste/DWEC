let td = document.querySelectorAll("td")
for(let i = 0;i<td.length;i++){
    td[i].addEventListener("mouseover",()=>{
        td[i].classList.add("highlight")
    })

    td[i].addEventListener("mouseout",()=>{
        td[i].classList.remove("highlight")
    })
}