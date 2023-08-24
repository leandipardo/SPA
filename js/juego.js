export default function juego(){
  const d = document;
  const $pacman = d.querySelector(".pacman");
  const $tablero = d.querySelector(".tablero");
  window.addEventListener("keydown", disableArrowScroll);
  let x = 0;
  let y = 0;
  function disableArrowScroll(event) {
    const lPacman = $pacman.getBoundingClientRect();
    const lTablero = $tablero.getBoundingClientRect();
    switch (event.keyCode) {
      case 37:
        event.preventDefault();
        if (lPacman.left > lTablero.left) {
          x--;
        }
        break;
      case 38:
        event.preventDefault();
        if (lPacman.top > lTablero.top) y--;
        break;
      case 39:
        event.preventDefault();
        if (lPacman.right < lTablero.right) x++;
        break;
      case 40:
        event.preventDefault();
        if (lPacman.bottom < lTablero.bottom) y++;
        break;
      default:
        break;
    }
    $pacman.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    if (event.key === "p" && event.altKey) {
      prompt("Has enviado un prompt");
    } else {
      if (event.key === "a" && event.altKey) {
        alert("Has enviado una alerta");
      } else {
        if (event.key === "c" && event.altKey) {
          confirm("Has enviado una confirmacion");
        }
      }
    }
  }
}