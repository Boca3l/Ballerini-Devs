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
                //SET CARD
            </div>

            <div class="proximo"><img src="img/Continuar-esquerda.svg" alt=""></div>
        </div>
    `;
    //set first card
    setCard()
    //add listener for cadastro
    let listAdd = document.querySelector('#addDev')
    listAdd.addEventListener('click',setCadastro)

}