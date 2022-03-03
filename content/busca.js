
import { setLista } from "./listaDev.js";

export function Buscar () {
    let buscar = document.getElementById('buscar').value

    let arrayDev = []
    arrayDev = JSON.parse(localStorage.getItem('devStorage'))
    let arrayBusca = []

    arrayDev.forEach(item => {
        let nomeUp = item.cardnome.toUpperCase()
        let cargoUp = item.cardcargo.toUpperCase()

        if(nomeUp.includes(buscar.toUpperCase())){
            arrayBusca.push(item)
        }else if(cargoUp.includes(buscar.toUpperCase())){
            arrayBusca.push(item)
        }

    });
    if(arrayBusca.length>0 ){
        setLista(arrayBusca)
    }else{
        arrayBusca[0] = 0
        setLista(arrayBusca)
    }

}