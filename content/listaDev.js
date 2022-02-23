import { setCadastro } from "./cadastro.js";
import { setCard } from "./card.js";

import { deletarConfirm } from "./deletar.js";

export function setLista (){
    
    let getConteudo = document.body.querySelector('#conteudo')
    getConteudo.innerHTML=
    `
        <div class="div-btn">
            <input type="button" value="Adicionar Desenvolvedor" class="devmais" id="addDev">
        </div>

        <div class="container">

            <div class="voltar"><img src="img/voltar-direita.svg" alt=""></div>

            <div class="container-cards" id="card-container">
                
            </div>

            <div class="proximo"><img src="img/Continuar-esquerda.svg" alt=""></div>
        </div>
    `;
// carrega os cards no container
    loadContainer()
    
//add listener para o cadastro de novo dev
    let listAdd = document.querySelector('#addDev')
    listAdd.addEventListener('click',setCadastro)

    createBtnEventListener()

}

function loadContainer (){
    if(localStorage.getItem('divHtml')==null){
        setCard('','','','','','')
    }else{
        document.getElementById('card-container').innerHTML = localStorage.getItem('divHtml')
    }
}

export function createBtnEventListener(){
    let btn = document.getElementsByClassName('deletar')
    for(let item of btn){
        item.addEventListener('click',deletarDev)
    }
}

function deletarDev(){
    let div = this.parentNode.parentNode.id
    localStorage.setItem('excluirDiv',div)
    deletarConfirm()
    
    //div.parentNode.removeChild(div)
    ///editarLista()
}

