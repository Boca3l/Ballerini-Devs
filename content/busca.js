
import { carregaLista } from "./carregaDevs.js";

export function Buscar () {
//le o valor do input
    let buscar = document.getElementById('buscar').value

//cria array que vai receber o localstorage
    let arrayDev = []
    arrayDev = JSON.parse(localStorage.getItem('devStorage'))
//array com resultado da busca
    let arrayBusca = []

//para cada elemento do array irá verificar se existe o nome
//todas letras maiúsculas
    arrayDev.forEach(item => {
        let nomeUp = item.cardnome.toUpperCase()
        let cargoUp = item.cardcargo.toUpperCase()

        if(nomeUp.includes(buscar.toUpperCase())){
            arrayBusca.push(item)
        }else{
            if(cargoUp.includes(buscar.toUpperCase())){
                arrayBusca.push(item)
            }
        }
    });

    if(arrayBusca.length>0){
        carregaLista(1,arrayBusca)
    }
}