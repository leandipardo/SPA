const $p = document.getElementById("display-reloj");

export default function actualizarHora (hora){
    $p.innerText = `${hora}`;
}