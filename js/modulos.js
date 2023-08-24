import menuSlide from "./menu.js";
import alarm from "./reloj.js";
import juego from "./juego.js";
import countdown from "./countdown.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    menuSlide(".button-menu",".scuare",".menu");
    alarm(".clock", ".clock-off", ".sound",".sound-off");
    juego();
    countdown();
})

//deja de joder negrata