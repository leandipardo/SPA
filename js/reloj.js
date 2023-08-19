export default function alarm (clock, stop, soundOn, soundOff){
  const d = document;
  let a = undefined;
    d.addEventListener("click", (e) => {
      console.log(e)
      if (e.target.matches(clock)){
        console.log("entro en play")
        a = setInterval(function intervuki(){
          console.clear();
          const fecha = new Date();
          console.log(fecha.toLocaleTimeString());
        },1000);
      }
      if(e.target.matches(stop)){
        console.log("entro en pause")
        clearInterval(a);
      }
      if (e.target.matches(soundOn)){
        
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
        const conteiner = document.querySelector(".sonido");
        conteiner.remove("audio");
      }
    });
}