const d = document;
export default function botonup (scrollY){
    const $boton = d.querySelector(".boton-arriba");
    const pixeles = 500;
    if(scrollY > 500){
        $boton.classList.add("active")
    }else{
        $boton.classList.remove("active")
    }
    if(scrollY > 500 && scrollY <= 1000){
        $boton.setAttribute("style", `opacity:${(scrollY - pixeles) / 500}`);
    }
}

