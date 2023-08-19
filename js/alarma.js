export default function alarm (clock){
    console.log("hola");
    const d = document;
    
    d.addEventListener("click", (e) => {
      if (e.target.matches(clock)) {
        console.log(fecha.toLocaleTimeString());
        console.log("a");
      }
    });
}