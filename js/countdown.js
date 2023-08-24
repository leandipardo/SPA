//importarciones
let d = document;
let $p = d.querySelector(".cronometro");


export default function countdown(){
    
    function calendario (){
        //esta funcion resta la fecha esperada con la fecha actual
        let y = new Date();
        //este arreglo es para ir sumando todos los meses y asi acumular los dias ya recorridos
        const meses = [31,28,31,30,31,30,31,31,30,31,30,31];
        
        //esta constante es la fecha a la que deseamos llegar
        const x = {
            segundos: 60,
            minutos: 59,
            horas: 23,
            dias: 364,
        };
        const result = x;
        let diastotales = 0;
        //con este for recorremos al arreglo anterior sumando todos los dias de cada mes hasta el mes actual
        //el metodo getMonth() retorna un numero de mes -1, es decir, si el mes es marzo retorna el 2 si es diciembre retorna 11, etc...
        for(let i = 0; i < y.getMonth(); i++) {
            diastotales = diastotales + meses[i];
        }
        result.segundos = x.segundos - y.getSeconds();
        result.minutos = x.minutos - y.getMinutes();
        result.horas = x.horas - y.getHours();
        result.dias = x.dias - diastotales - y.getDate(); //en esta linea solo falta restarle a la fecha esperada los dias ya recorridos.
        return result;
    }
    setInterval(() => {
        let fecha = calendario();
        if( fecha.dias === 0 && fecha.horas === 0 && fecha.minutos === 0 && fecha.segundos === 0){
            //mensajito al finalizar el countdown
            $p.innerHTML = `FELIZ AÑO NUEVO !!!`;
        }else{
            //actualiza la fecha en la etiqueta <p></p>
            $p.innerHTML = `D: ${fecha.dias}  H: ${fecha.horas}  M: ${fecha.minutos}  S: ${fecha.segundos}`;
        }
    }, 1000);
}
