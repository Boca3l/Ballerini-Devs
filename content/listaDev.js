import { setCadastro } from "./cadastro.js";
import { editarConfirm } from "./editar.js";
import { deletarConfirm } from "./deletar.js";
import { carregaLista } from "./carregaDevs.js";
import { VoltarLista,AvancarLista } from "./moverLista.js";
import { Buscar } from "./busca.js";

export function setLista (){
    
    let getConteudo = document.body.querySelector('#conteudo')
    getConteudo.innerHTML=
    `
        <div class="div-btn" id="float">
            <input type="button" value="Adicionar Desenvolvedor" class="devmais" id="addDev">
        </div>

        <div class="container">

            <div class="voltar"><a id="voltar"><img src="img/voltar-direita.svg" id="volta"></a></div>

            <div class="container-cards" id="card-container"></div>

            <div class="proximo"><a id="proximo"><img src="img/Continuar-esquerda.svg" id="ida"></a></div>
        
        </div>
    `
    getConteudo
    ;

// carrega os cards no container
    carregaLista(0)

// exibe o search
    document.getElementById('buscar').style.visibility = "visible"
    
//add listener para o cadastro de novo dev
    let listAdd = document.querySelector('#addDev')
    listAdd.addEventListener('click',setCadastro)

    createBtnEventDeletar()
    createBtnEventEditar()
    createBtnEventVoltar()
    createBtnEventProximo()
    createBuscaElemento()
}

//////// listener Deletar DEV
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

//////// listener Editar Dev
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

//////// listener Voltar Lista
export function createBtnEventVoltar(){
    let btnVoltar = document.querySelector('#voltar')
    btnVoltar.addEventListener('click',VoltarLista)
}
//////// listener Avancar Lista
export function createBtnEventProximo(){
    let btnProximo = document.querySelector('#proximo')
    btnProximo.addEventListener('click',AvancarLista)
}

//////// listener Buscar Lista
export function createBuscaElemento(){
    let busca = document.querySelector('#buscar')
    busca.addEventListener('keyup',Buscar)
}
