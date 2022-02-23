import { setCadastro } from "./cadastro.js";
import { setCard } from "./card.js";

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

    //add listener for cadastro
    let listAdd = document.querySelector('#addDev')
    listAdd.addEventListener('click',setCadastro)

    //let listDelete = document.querySelector('#deletar')

    
}

function loadContainer (){
    if(localStorage.getItem('divHtml')==null){
        setCard('','','','','','')
    }else{
        document.getElementById('card-container').innerHTML = localStorage.getItem('divHtml')
    }
}