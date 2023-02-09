let td = document.querySelectorAll("td")
for(let i = 0;i<td.length;i++){
    td[i].addEventListener("mouseenter",(e)=>{
        e.target.classList.add("highlight")
    })

    td[i].addEventListener("mouseleave",(e)=>{
        e.target.classList.remove("highlight")
    })
}