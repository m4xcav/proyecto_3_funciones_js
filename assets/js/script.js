function pintar(elem, color){
    elem.style.backgroundColor = color;
    }
    const ele = document.getElementById("ele1");
    document.addEventListener("DOMContentLoaded", pintar(ele, "green"));
    ele.addEventListener("click", ()=>pintar(ele, "yellow"));