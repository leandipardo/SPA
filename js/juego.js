const d = document;
let rotacion=0,
x=0,
y=0,
a=0,
direccion=undefined,
ultimaTecla=undefined;
export function badisimo(){ 
  let $badPacman = d.querySelector(".bad-pacman");
  setInterval(()=>{
  $badPacman.style.transform =`translate(${Math.random()*100}px, ${Math.random()*100}px)rotate${direccion}(${rotacion}deg)`
},Math.random()*1000);
}
export function movepacman(e, pacman, tablero){
  const $pacman = d.querySelector(pacman),
  $score = d.querySelector(".score"),
  $tablero = d.querySelector(tablero);
  if(ultimaTecla !== undefined){
    setTimeout(() => {
      clearInterval(jujuy);
      console.log("borrado3");
    });
  }
  //s
  if(e.keyCode === 83){
    ultimaTecla="s";
    e.preventDefault();
  }else{
    //izquierda
    if(e.keyCode === 37){
      e.preventDefault()
      rotacion=180;
      direccion="y";
      ultimaTecla="izq";
    }else{
      //derecha
      if(e.keyCode === 39){
        e.preventDefault()
        rotacion=0;
        direccion="x";
        ultimaTecla="der";
      }else{
        //arriba
        if(e.keyCode === 38){
          e.preventDefault()
          direccion="z";
          rotacion=-90;
          ultimaTecla="arr";
        }else{
          //abajo
          if(e.keyCode === 40){
            e.preventDefault()
            direccion="z";
            rotacion=90;
            ultimaTecla="aba";
          }
        }
      } 
    }
  }
  const jujuy = setInterval(()=>{
    if(ultimaTecla =="aba"){
      y++;
    }else{
      if(ultimaTecla =="arr"){
        y--;
      }else{
        if(ultimaTecla =="izq"){
          x--;
        }else{
          if(ultimaTecla =="der"){
            x++;
          }  
        }
      }
    }
    $pacman.style.transform =`translate(${x*30}px, ${y*30}px)rotate${direccion}(${rotacion}deg)`
    a++;
    let text = `score = ${a}`
    $score.textContent = text;
  },100)
}
export function shortcuts(e){
if(e.key === "p" && e.altKey)prompt("Has enviado un prompt hijo de perra");
if(e.key === "a" && e.altKey)alert("Has enviado una alerta mother fucker");
if (e.key === "c" && e.altKey)confirm("Has enviado una confirmacion culiao");
}