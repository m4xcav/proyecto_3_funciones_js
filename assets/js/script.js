//scrip a modificar

// function pintar(){
// ele = document.getElementById("ele1")
// ele.style.backgroundColor = "yellow"
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

//modificacion del script anterior
function pintar(elem, color){
    elem.style.backgroundColor = color;
    }
    const ele = document.getElementById("ele1");
    let color
    document.addEventListener("DOMContentLoaded", pintar(ele, color = "green"));
    ele.addEventListener("click", ()=>pintar(ele, color = "yellow"));