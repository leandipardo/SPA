export default function alarm (clock, stop, soundOn, soundOff){
    const d = document;
    const condition = true;
    d.addEventListener("click", (e) => {
    
      if (e.target.matches(clock)){
        console.log(e.target);
        const temporizador = setInterval(() => {
          console.clear();
          const fecha = new Date();
          console.log(fecha.toLocaleTimeString());
        }, 1000);
        temporizador();
      }
      if(e.target.matches(stop)){
        clearInterval(temporizador);
        console.log("fui apretado");
      }


      if (e.target.matches(soundOn)) {
      
      }
      
      
      if (e.target.matches(soundOff)) {
      
      }
    });
}