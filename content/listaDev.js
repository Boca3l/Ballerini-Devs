import { setCadastro } from "./cadastro.js";
import { editarConfirm } from "./editar.js";
import { deletarConfirm } from "./deletar.js";
import { carregaLista } from "./carregaDevs.js";

export function setLista (){
    
    let getConteudo = document.body.querySelector('#conteudo')
    getConteudo.innerHTML=
    `
        <div class="div-btn">
            <input type="button" value="Adicionar Desenvolvedor" class="devmais" id="addDev">
        </div>

        <div class="container">

            <div class="voltar"><a href="#2"><img src="img/voltar-direita.svg" alt=""></a></div>

            <div class="container-cards" id="card-container"></div>

            <div class="proximo"><a href="#7"><img src="img/Continuar-esquerda.svg" alt=""></a></div>
        </div>
    `;
// carrega os cards no container
    loadContainer()
// exibe o search
    document.getElementById('buscar').style.visibility = "visible"
    
//add listener para o cadastro de novo dev
    let listAdd = document.querySelector('#addDev')
    listAdd.addEventListener('click',setCadastro)

    createBtnEventDeletar()
    createBtnEventEditar()


}

function loadContainer (){
    if(localStorage.getItem('divHtml')==null){
        carregaLista()
    }else{
        document.getElementById('card-container').innerHTML = localStorage.getItem('divHtml')
    }
}
//Deletar DEV
export function createBtnEventDeletar(){
    let btnDeletar = document.getElementsByClassName('deletar')
    for(let item of btnDeletar){
        item.addEventListener('click',deletarDev)
    }
}

function deletarDev(){
    let divDeletar = this.parentNode.parentNode.id
    localStorage.setItem('excluirDiv',divDeletar)
    deletarConfirm()
}

//Editar Dev
export function createBtnEventEditar(){
    let btnEditar = document.getElementsByClassName('editar')
    for(let item of btnEditar){
        item.addEventListener('click',editarDev)
    }
}

function editarDev(){
    let divEditar = this.parentNode.parentNode.id
    localStorage.setItem('editarDiv',divEditar)
    editarConfirm()
}


