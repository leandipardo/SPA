export default function alarm (clock){
    const d = document;
    d.addEventListener("click", (e) => {
      if (e.target.matches(clock)|| e.target.matches(`${clock} *`)){
        setInterval(()=>{
          console.clear();
          const fecha = new Date();
          console.log(fecha.toLocaleTimeString())
        },1000);a
      }
    });
}