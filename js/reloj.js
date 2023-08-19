
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
      if (e.target.matches(soundOn)) {
      
      } 
      if (e.target.matches(soundOff)){
      
      }
    });
}
