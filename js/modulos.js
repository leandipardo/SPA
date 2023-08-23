import menuSlide from "./menu.js";
import alarm from "./reloj.js";
import {movepacman, shortcuts} from "./juego.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    menuSlide(".button-menu",".scuare",".menu");
    alarm(".clock", ".clock-off", ".sound",".sound-off");
})
d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    movepacman(e,".pacman",".tablero")
})