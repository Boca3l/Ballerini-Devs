import {editarLista} from './editarLista.js'

export function editarConfirm() {
//nós
    let divId = localStorage.getItem('editarDiv')
    let divPointer = document.getElementById(divId)
    let divCard = divPointer.childNodes[1]
    let dadosPessoais = divCard.childNodes[5]
    let divLinks = divCard.childNodes[7]

//valores
    let avatar = divCard.childNodes[1].src
    let nome = dadosPessoais.childNodes[1].innerText
    let cargo = dadosPessoais.childNodes[3].innerText
    let github = divLinks.childNodes[1].href
    let linkedin = divLinks.childNodes[3].href

//nós para edição
    let editavatar = divCard.childNodes[1]
    let editnome = dadosPessoais.childNodes[1]
    let editcargo = dadosPessoais.childNodes[3]
    let editgithub = divLinks.childNodes[1]
    let editlinkedin = divLinks.childNodes[3]


//abre o modal
    let getCadastro = document.querySelector('#cadastro')
    getCadastro.innerHTML = 
    `<div class="modal" id="NewDev">
        <div class="modal-janela">

            <h1 class="modal-titulo">Adicionar Desenvolvedor ${divPointer.id}</h1>

            <div class="form">

                <div class="item">
                    <label for="fnome" class="modal-texto">Nome</label>
                    <input type="text" name="fnome" id="fnome" value="${nome}">
                </div>

                <div class="item">
                    <label for="fvatar" class="modal-texto">Avatar</label>
                    <input type="text" name="favatar" id="favatar" value="${avatar}">
                </div>

                <div class="item">
                    <label for="fcargo" class="modal-texto">Cargo</label>
                    <input type="text" name="fcargo" id="fcargo" value="${cargo}">
                </div>

                <div class="item">
                    <label for="fgithub" class="modal-texto">Github</label>
                    <input type="text" name="fgithub" id="fgithub" value="${github}">
                </div>

                <div class="item">
                    <label for="flinkedin" class="modal-texto">Linkedin</label>
                    <input type="text" name="flinkedin" id="flinkedin" value="${linkedin}">
                </div>

            </div>

            <input type="button" value="Cancelar" class="btn-g" id="cancelar-dev">
            <input type="button" value="Salvar" class="btn-g" id="enviar-dev">

        </div>
    </div>
    `;

//função para fechar o cadastro
    function fechar(){
        document.getElementById('NewDev').style.display = "none"
    }
    
//listeners para fechar o cadastro
    document.getElementById('cancelar-dev').addEventListener('click',fechar)

    window.onclick = function(event){
        if(event.target == document.getElementById('NewDev')){
            fechar()
        }
    }

//listener para confirmar edição
    document.getElementById('enviar-dev').addEventListener('click',deleteDevConfirmed)

    function deleteDevConfirmed () {
        
        editavatar.src = document.getElementById('favatar').value
        editnome.innerText = document.getElementById('fnome').value
        editcargo.innerText = document.getElementById('fcargo').value
        editgithub.href = document.getElementById('fgithub').value
        editlinkedin.href = document.getElementById('flinkedin').value

        editarLista()
        fechar()
    }

}


