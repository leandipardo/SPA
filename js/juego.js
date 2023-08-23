const d = document;
let rotacion=0,
x=0,
y=0,
direccion=undefined,
ultimaTecla=undefined;
export function movepacman(e, pacman, tablero){
  const $pacman = d.querySelector(pacman),
  $tablero = d.querySelector(tablero);
  if(ultimaTecla != undefined){
  setTimeout(()=>{
    clearInterval(jujuy);
    console.log("borrado3")
  },0);
  }
  //izquierda
  if(e.keyCode === 37){
    e.preventDefault()
    rotacion=180;
    direccion="y";
    ultimaTecla="izq";
  }
  //derecha
  if(e.keyCode === 39){
    e.preventDefault()
    rotacion=0;
    direccion="x";
    ultimaTecla="der";
  }

  //arriba
  if(e.keyCode === 38){
    e.preventDefault()
    direccion="z";
    rotacion=-90;
    ultimaTecla="arr";
  }

  //abajo
  if(e.keyCode === 40){
    e.preventDefault()
    direccion="z";
    rotacion=90;
    ultimaTecla="aba";
  }
    const jujuy = setInterval(()=>{
    if(ultimaTecla =="aba")y++;
    if(ultimaTecla =="arr")y--;
    if(ultimaTecla =="izq")x--;
    if(ultimaTecla =="der")x++;
  $pacman.style.transform =`translate(${x*30}px, ${y*30}px)rotate${direccion}(${rotacion}deg)`;
    console.log(`x:${x}   y${y}      `)
  },100)
}







export function shortcuts(e){
if(e.key === "p" && e.altKey)prompt("Has enviado un prompt hijo de perra");
if(e.key === "a" && e.altKey)alert("Has enviado una alerta mother fucker");
if (e.key === "c" && e.altKey)confirm("Has enviado una confirmacion culiao");
}