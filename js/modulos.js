import menuSlide from "./menu.js";
import alarm from "./reloj.js";
import {movepacman,shortcuts} from "./juego.js";
import countdown from "./countdown.js";
import botonup from "./botonup.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    menuSlide(".button-menu",".scuare",".menu");
    alarm(".clock", ".clock-off", ".sound",".sound-off");
    countdown(".cronometro", "Sat Jan 13 2024 12:45:32", "Feliz Cumpleaños!!");
});

d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    movepacman(e,".pacman", ".tablero",".score")
});

d.addEventListener("scroll", (e)=>{
    botonup(window.scrollY);
});