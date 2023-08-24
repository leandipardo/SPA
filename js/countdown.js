//importarciones
let d = document;


export default function countdown(id, limitDate, finalMessage){
    const $p = d.querySelector(id),
    x = new Date(limitDate).getTime();

    let Temporizador = setInterval(()=>{
        let y = new Date().getTime(),
          limitTime = x - y,
          dias = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
          horas = (
            "0" +
            Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ).slice(-2),
          minutos = (
            "0" +
            Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
          ).slice(-2),
          segundos = (
            "0" +
            Math.floor((limitTime % (1000 * 60)) / 1000 )
          ).slice(-2);
        $p.innerHTML = `D: ${dias}  H: ${horas}  M: ${minutos}  S: ${segundos}`;

        if(limitTime < 0){
            clearInterval(Temporizador);
            
            $p.innerHTML = `${finalMessage}`;
        }
    },1000);
}

