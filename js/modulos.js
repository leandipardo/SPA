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
    event.preventDefault();
    const $pacman = d.querySelector(".pacman");
    if (event.key === "ArrowUp" && y >= 0) {
        console.log("entro");
        y--;
        $pacman.setAttribute(`style`,`top:calc(${y}% - 30px);left:calc(${x}% - 30px)`);
    }
    if (event.key === "ArrowDown" && y <= 100) {
        console.log("entro");
        y++;
        $pacman.setAttribute(`style`,`top:calc(${y}% - 30px);left:calc(${x}% - 30px)`);
    }
    if (event.key === "ArrowLeft" && x >= 0) {
        x--;
        console.log("entro");
        $pacman.setAttribute(`style`,`top:calc(${y}% - 30px);left:calc(${x}% - 30px)`);
    }
    if (event.key === "ArrowRight" && x <= 100) {
        x++;
        console.log("entro");
        $pacman.setAttribute(`style`,`top:calc(${y}% - 30px);left:calc(${x}% - 30px)`);
    }



  };






// if(keyleft && x >= 0){
//     x--;
// }
// if(keyup && y >= 0){
//     y--;
// }
