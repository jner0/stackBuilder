import Swal from "sweetalert2";
import  image002 from '../assets/images/image002.png'

export const validations = () => {


    const validatePicoPlaca = ({placa, fecha, hora}) => {

        //console.log({placa, fecha, hora});
        // Obtenemos el último dígito de la placa
        const ultimoDigitoPlaca = Number(placa.charAt(placa.length - 1));
        // Verificamos si la fecha corresponde a un día en el que aplica el Pico y Placa
        const diaSemana = new Date(fecha);
        const diaEnNumero = diaSemana.getDay(); //transforma el dia en un numero del 0 al 6 siendo lunes = 0 y asi sucesivamente.

        let aplica = false;
        if((diaEnNumero >= 0 && diaEnNumero <= 4) && hora >= '07:00' && hora <= '09:30' || hora >= '16:00' && hora <= '19:30'){ 
            aplica = true
        }

        // Verificamos si la placa está restringida para circular en la fecha y hora especificadas
        let puedeCircular = true;
        if ((diaEnNumero === 0 && (ultimoDigitoPlaca === 1 || ultimoDigitoPlaca === 2)) ||
            (diaEnNumero === 1 && (ultimoDigitoPlaca === 3 || ultimoDigitoPlaca === 4)) ||
            (diaEnNumero === 2 && (ultimoDigitoPlaca === 5 || ultimoDigitoPlaca === 6)) ||
            (diaEnNumero === 3 && (ultimoDigitoPlaca === 7 || ultimoDigitoPlaca === 8)) ||
            (diaEnNumero === 4 && (ultimoDigitoPlaca === 9 || ultimoDigitoPlaca === 0))) {
            puedeCircular = false;
        }

        if(aplica && !puedeCircular){
            Swal.fire({
                icon: 'error',
                title: "You cannot circulate with the vehicle due to the restriction of Pico and Placa.",
                text: 'Schedule from monday to friday: 7:00 a.m. - 9:30 a.m / 4:00 p.m - 19:30 p.m',
                imageUrl: image002
            })
            
        }else{
            Swal.fire({
                icon: 'success',
                title: "You can circulate without restrictions.",
                text: 'Schedule from monday to friday: 7:00 a.m. - 9:30 a.m / 4:00 p.m - 19:30 p.m',
                imageUrl: image002
            })
            
        }
    }


  return {
      validatePicoPlaca
  }
  
}
