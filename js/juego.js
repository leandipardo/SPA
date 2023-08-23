export default function juego(){
    const d = document;
    window.addEventListener("keydown", disableArrowScroll);
    let x = 50;
    let y = 50;
    function disableArrowScroll(event) {
    if(event.key !== "F12"){
        event.preventDefault();
    }
    const $pacman = d.querySelector(".pacman");
    if (event.key === "ArrowUp" && y > 0) {
        y--;
        $pacman.setAttribute(
        `style`,
        `top:calc(${y}% - 30px);left:calc(${x}% - 30px)`
        );
    }
    if (event.key === "ArrowDown" && y < 100) {
        y++;
        $pacman.setAttribute(
        `style`,
        `top:calc(${y}% - 30px);left:calc(${x}% - 30px)`
    );
    }
    if (event.key === "ArrowLeft" && x > 0) {
        x--;
        $pacman.setAttribute(
        `style`,
        `top:calc(${y}% - 30px);left:calc(${x}% - 30px)`
    );
  }
  if (event.key === "ArrowRight" && x < 100) {
    x++;
    $pacman.setAttribute(
      `style`,
      `top:calc(${y}% - 30px);left:calc(${x}% - 30px)`
    );
  }

  if(event.key === "p" && event.altKey){
    prompt("Has enviado un prompt");
  }else{
    if(event.key === "a" && event.altKey){
    alert("Has enviado una alerta");
  }else{
    if (event.key === "c" && event.altKey) {
      confirm("Has enviado una confirmacion");
    }
  }
}
}
}