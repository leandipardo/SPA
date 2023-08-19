export default function alarm (clock, stop, soundOn, soundOff){
  const d = document;
  let a;
  
    d.addEventListener("click", (e) => {
      const $p = document.getElementById("display-reloj");
      const $clock = document.querySelector(clock);
      const $stop = document.querySelector(stop);
      const $sound = document.querySelector(soundOn);
      const $soundOff = document.querySelector(soundOff);



      if (e.target.matches(clock)){
        $clock.disabled = true;
        $stop.disabled= false;
        a = setInterval(() =>{
          $p.innerText = `${new Date().toLocaleTimeString()}`;
        },1000);
      }
      if(e.target.matches(stop)){
        $stop.disabled = true;
        $clock.disabled = false;
        clearInterval(a);
        $p.innerText = null;
      }
      if (e.target.matches(soundOn)){
        $sound.disabled = true;
        $soundOff.disabled = false


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
        $soundOff.disabled = true;
        $sound.disabled = false;


        const conteiner = document.querySelector(".sonido");
        conteiner.remove("audio");
      }
    });
}
