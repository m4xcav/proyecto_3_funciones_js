// ejercicio 4 parte 1
const div1 = document.getElementById("d1");
const div2 = document.getElementById("d2");
const div3 = document.getElementById("d3");
const div4 = document.getElementById("d4");

const camcolor = (event) =>{
    return (event.target.style.backgroundColor = "black");
}

div1.addEventListener("click", camcolor);
div2.addEventListener("click", camcolor);
div3.addEventListener("click", camcolor);
div4.addEventListener("click", camcolor);

// ejercicio 4 parte 2
const divasd = document.getElementById("key");
const divqwe = document.getElementById("key1");
const texto = document.getElementById("textalert");

function camconletra(event){
    const transletra = event.key.toLowerCase();
    let color = "";
    let tcolor;
    switch(transletra){
        case 'a':
            color ="pink";
            break;
        case 's':
            color ="orange";
            break;
        case 'd':
            color ="skyblue";
            break;
        case 'q':
           color ="yellow";
            break;
        case 'w':
           color ="blue";
            break;
        case 'e':
           color ="brown";
            break;       
    }
    if(color !=""){
        switch(transletra){
            case 'a':
                divasd.style.backgroundColor = color;
                tcolor = "Rosado";
                break;
            case 's':
                divasd.style.backgroundColor = color;
                tcolor = "Naranjo";
                break;
            case 'd':
                divasd.style.backgroundColor = color;
                tcolor = "Celeste";
                break;
            case 'q':
                divqwe.style.backgroundColor = color;
                tcolor = "Amarillo";
                break;
            case 'w':
                divqwe.style.backgroundColor = color;
                tcolor = "Azul";
                break;
            case 'e':
                divqwe.style.backgroundColor = color;
                tcolor = "Marron";
                break;       
        }
        
        texto.textContent = `La letra seleccionada '${transletra}' da como resultado el color: ${tcolor}`;
    }else{
        texto.textContent = 'Ingrese una letra válida';
        divqwe.style.backgroundColor = "white";
        divasd.style.backgroundColor = "white";
    }
}
document.addEventListener("keydown", camconletra);

