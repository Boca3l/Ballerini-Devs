
import { setLista } from "./listaDev.js"

export function carregaLista(tipo,busca){
    //tipo 0==carregamento // tipo 1==busca
//aponta card container
    let getContainer = document.querySelector('#card-container')

    if(tipo=='0'){
        if(localStorage.getItem('devStorage')){
            let arrayStorage = JSON.parse(localStorage.getItem('devStorage'))
            carregar(arrayStorage)
        }else{
            criarStorage()
            let arrayInicio = []
            let Dev = {
                cardid : "1",
                cardnome : 'Pedro Teixeira',
                cardavatar : 'avatares/avt2.jpg',
                cardcargo : 'Estudante Front-End',
                cardgithub : 'https://github.com/Boca3l',
                cardlinkedin : 'https://www.linkedin.com/in/preisteixeira/',
            }
            arrayInicio.push(Dev)
            localStorage.setItem('devStorage',JSON.stringify(arrayInicio))
            criarStorage()
            setLista()
        }
    }
    if(tipo=='1'){
        carregar(busca)
    }

// ForEAch para carregar os arrays na tela
    function carregar(arrayDev){

        getContainer.innerHTML = ''
        arrayDev.forEach(item => {
            getContainer.innerHTML +=
            `
                <div class="CardDev1" id="${item.cardid}">

                    <div class="card-card">
                        <div class="img-card"><img src='${item.cardavatar}' alt="" class="card-avatar"/></div>
                        <div class="linha"></div>
                        <div class="card-dados">
                            <h1>${item.cardnome}</h1>
                            <h2>${item.cardcargo}</h2>
                        </div>
                        <div class="card-links">
                            <a href="${item.cardgithub}" target="_blank"><img src="img/icone-github.svg" alt=""></a>
                            <a href="${item.cardlinkedin}" target="_blank"><img src="img/icone-linkedin.svg" alt=""></a>
                            <input type="button" value="Ver Mais" class="vermais">
                        </div>
                    </div>

                    <div class="card-controles">
                        <input type="button" value="Editar" class="editar vermais" id="editar${item.cardid}">
                        <input type="button" value="Deletar" class="deletar vermais" id="deletar${item.cardid}">
                    </div>

                </div>
            `
        });
    }
    //armazena as vaa
    function criarStorage (){
    //se devNum estiver vazio recebe 1
    //senao le o devnum e adiciona mais um
        if(localStorage.getItem('devNum')==null || localStorage.getItem('devNum').length==0){
            localStorage.setItem('devNum',1)
        }else{
            let c = Number(localStorage.getItem('devNum'))
            localStorage.setItem('devNum',c+1)
        }
    }
} 
