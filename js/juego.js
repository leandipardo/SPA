const d = document;
// const section = d.getElementById("seccion2");

// //crear maquetacion

// const div = d.createElement("div");
// div.className = "tablero";

// const pacman = d.createElement("div");
// pacman.className = "pacman";



// d.addEventListener("onkeydown", e=> ){
//     if(e.addEventListener("key")
// }

const $pacman = d.querySelector(".pacman");
const x = 50;
const y = 50;
if(x >=0){
    x--;
    $pacman.setAttribute("style", `top:${x}`);
}
if(y >=0){
    y--;
    $pacman.setAttribute("style", `left:${y}`);
}
