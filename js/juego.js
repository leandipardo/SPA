const d = document;
let rotacion=0,
x=0,
y=0,
a=0,
direccion=undefined,
ultimaTecla=undefined;
export function movepacman(e,pacman,tablero, score){
  const $pacman = d.querySelector(pacman);
  const $tablero = d.querySelector(tablero);
  let $score = d.querySelector(score);
  if(ultimaTecla !== undefined){
    setTimeout(() => {
      clearInterval(jujuy);
    });
  }
  switch(e.keyCode) {
    case 37://izquierda
    console.log(e.keyCode);
    e.preventDefault();
    rotacion = 180;
    direccion = "y";
    ultimaTecla = "izq";
    break;
    case 38://arriba
    e.preventDefault()
    direccion="z";
    rotacion=-90;
    ultimaTecla="arr";
    break;
    case 39://derecha
    e.preventDefault()
    rotacion=0;
    direccion="x";
    ultimaTecla="der";
    break;
    case 40://abajo
    e.preventDefault()
    direccion="z";
    rotacion=90;
    ultimaTecla="aba";
    break;
    case 83://s
      console.log("tecla S");
      ultimaTecla = "s";
      e.preventDefault();
      break;
  }
  const jujuy = setInterval(()=>{
    const limitPacman = $pacman.getBoundingClientRect(),
      limitTablero = $tablero.getBoundingClientRect();
    if((ultimaTecla =="aba") && (limitPacman.bottom < limitTablero.bottom)){
      y++;
    }else{
      if((ultimaTecla =="arr") && (limitPacman.top > limitTablero.top)){
        y--;
      }else{
        if((ultimaTecla =="izq") && (limitPacman.left > limitTablero.left)){
          x--;
        }else{
          if((ultimaTecla =="der") && (limitPacman.right < limitTablero.right)){
            x++;
          }  
        }
      }
    }
    $pacman.style.transform =`translate(${x*30}px, ${y*30}px)rotate${direccion}(${rotacion}deg)`
    if(ultimaTecla !== "s"){
      a++;
      }
      let text = `score = ${a}`
      $score.textContent = text;
  },100);
}
export function shortcuts(e){
  if (e.key === "p" && e.altKey) {
    prompt("Has enviado un prompt");
  } else {
    if (e.key === "a" && e.altKey) {
      alert("Has enviado una alerta");
    } else {
      if (e.key === "c" && e.altKey) {
        confirm("Has enviado una confirmacion");
      }
    }
  }
}