import menuSlide from "./menu.js";
import alarm from "./menu.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    menuSlide(".button-menu",".scuare",".menu");
})
d.addEventListener("DOMcontentLoaded", (e)=>{
    alarm(".clock");
})
