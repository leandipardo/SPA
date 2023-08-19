export default function alarm (clock, stop, soundOn, soundOff){
  const d = document;
  let a = undefined;
  
    d.addEventListener("click", (e) => {
      const $p = document.getElementById("display-reloj");
      const $clock = document.querySelector(clock);
      const $stop = document.querySelector(stop);
      const $sound = document.querySelector(soundOn);
      const $soundOff = document.querySelector(soundOff);
      if (e.target.matches(clock)){
        console.log("entro en play")
        $clock.setAttribute("disabled","true");
        $stop.removeAttribute("disabled");
        a = setInterval(function intervuki(){
          console.clear();
          const fecha = new Date();
          $p.innerText = `${fecha.toLocaleTimeString()}`;
        },1000);
      }
      if(e.target.matches(stop)){
        $stop.setAttribute("disabled","true")
        $clock.removeAttribute("disabled");
        clearInterval(a);
        $p.innerText = ``;
      }
      if (e.target.matches(soundOn)){
        $sound.setAttribute("disabled","true");
        $soundOff.removeAttribute("disabled");
        const conteiner = document.querySelector(".container-button");
        console.log(conteiner);
        const $sonido = document.createElement("audio");
        console.log($sonido);
        $sonido.setAttribute("class","sonido");
        $sonido.setAttribute("src","/assets/clock-sound.mp3");
        $sonido.setAttribute("autoplay","true");
        conteiner.insertAdjacentElement("beforeend",$sonido);
      } 
      if (e.target.matches(soundOff)){
        $soundOff.setAttribute("disabled","true");
        $sound.removeAttribute("disabled");
        const conteiner = document.querySelector(".sonido");
        conteiner.remove("audio");
      }
    });
}
