import menuSlide from "./menu.js";
import alarm from "./alarma.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    menuSlide(".button-menu",".scuare",".menu");
})
alarm(".clock")
