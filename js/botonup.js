const d = document;
let booleano = true;
export default function botonup (scrollY){
    const $boton = d.querySelector(".boton-arriba");
    console.log(scrollY)
    if(scrollY > 500 && booleano){
        $boton.setAttribute("style", "animation: mostrar 1s ease normal forwards");
        booleano = false;
    }else{
        if(scrollY <= 500 && !booleano){
            $boton.setAttribute("style","animation: mostrar 1s ease reverse forwards");
            booleano = true;    
        }
    }
}