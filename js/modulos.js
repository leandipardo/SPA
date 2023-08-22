import menuSlide from "./menu.js";
import alarm from "./reloj.js";
// import juego from "./juego.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    menuSlide(".button-menu",".scuare",".menu");
    alarm(".clock", ".clock-off", ".sound",".sound-off");
    // juego("");
})



  window.addEventListener("keydown", disableArrowScroll)
  let x=50;
  let y=50;
  function disableArrowScroll(event){
    const $pacman = d.querySelector(".pacman");
    if (event.key === "ArrowUp") {
        console.log("entro");
        y--;
        event.preventDefault();
        $pacman.setAttribute(`style`,`top:${y}%;left:${y}%`);
        console.log(`el valor de y es : ${y}`);
    }
    if (event.key === "ArrowDown") {
        console.log("entro");
        y++;
        event.preventDefault();
        $pacman.setAttribute(`style`,`top:${y}%;left:${y}%`);
        console.log(`el valor de y es : ${y}`);
    }
    if (event.key === "ArrowLeft") {
        x--;
        console.log("entro");
        event.preventDefault();
        $pacman.setAttribute(`style`,`top:${y}%;left:${y}%`);
        console.log(`el valor de x es : ${x}`);
    }
    if (event.key === "ArrowRight") {
        x++;
        console.log("entro");
        event.preventDefault();
        $pacman.setAttribute(`style`,`top:${y}%;left:${y}%`);
        console.log(`el valor de x es : ${x}`);
    }



  };






// if(keyleft && x >= 0){
//     x--;
// }
// if(keyup && y >= 0){
//     y--;
// }
