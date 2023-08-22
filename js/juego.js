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


let a = d.addEventListener("keypress", (e)=>{
console.log(e)
});



function movimieto(keyup,keydn,keyleft,keyright){
const x = 50;
const y = 50;
if(keyleft && x >= 0){
    x--;
}
if(keyup && y >= 0){
    y--;
}
$pacman.setAttribute("style", `top:${x}`);
$pacman.setAttribute("style", `left:${y}`);
}