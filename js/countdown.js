let d = document;
let $p = d.querySelector(".cronometro");


export default function countdown(){
    
    function calendario (){
        let y = new Date();
        const meses = [31,28,31,30,31,30,31,31,30,31,30,31];
        const x = {
          segundos: 60,
          minutos: 59,
          horas: 23,
          dias: 364,
        };
        const result = x;
        let diastotales = 0;

        for(let i = 0; i < y.getMonth(); i++) {
            diastotales = diastotales + meses[i];
        }
        result.segundos = x.segundos - y.getSeconds();
        result.minutos = x.minutos - y.getMinutes();
        result.horas = x.horas - y.getHours();
        result.dias = x.dias - diastotales - y.getDate();
        return result;
    }

    setInterval(() => {
        let fecha = calendario();
        $p.innerHTML = `D: ${fecha.dias}  H: ${fecha.horas}  M: ${fecha.minutos}  S: ${fecha.segundos}`;
    }, 1000);
}
