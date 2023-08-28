const d = document;

export default function darkmode(btn){

    d.addEventListener("click",(e)=>{
        const $lista = d.querySelectorAll("[data-dark]");
        const $boton = d.querySelector(btn);

        if(e.target.matches(btn)){

            if($boton.className === "fa-regular fa-moon"){
                $boton.classList.remove("fa-moon");
                $boton.classList.add("fa-sun");
            }else{
                $boton.classList.remove("fa-sun");
                $boton.classList.add("fa-moon");
            }
            
            $lista.forEach(element =>{
                element.classList.toggle("dark-mode");
            });
        }
    });
}