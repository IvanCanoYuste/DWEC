let td = document.querySelectorAll("td")
for(let i = 0;i<td.length;i++){
    td[i].addEventListener("mouseenter",()=>{
        td[i].classList.add("highlight")
    })

    td[i].addEventListener("mouseleave",()=>{
        td[i].classList.remove("highlight")
    })
}