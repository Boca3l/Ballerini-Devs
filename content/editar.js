import { carregaLista } from "./carregaDevs.js"
import { setLista } from "./listaDev.js"

export function editarConfirm() {
//nós
    let divId = localStorage.getItem('editarDiv')
    let divPointer = Number(document.getElementById(divId).id)-1
    //let divCard = divPointer.childNodes[1]
    //let dadosPessoais = divCard.childNodes[5]
    //let divLinks = divCard.childNodes[7]

    let arrayDev = JSON.parse(localStorage.getItem('devStorage'))

//valores
    let id = arrayDev[divPointer].cardid
    let avatar = arrayDev[divPointer].cardavatar
    let nome = arrayDev[divPointer].cardnome
    let cargo = arrayDev[divPointer].cardcargo
    let github = arrayDev[divPointer].cardgithub
    let linkedin = arrayDev[divPointer].cardlinkedin

/*
//nós para edição
    let editavatar = divCard.childNodes[1]
    let editnome = dadosPessoais.childNodes[1]
    let editcargo = dadosPessoais.childNodes[3]
    let editgithub = divLinks.childNodes[1]
    let editlinkedin = divLinks.childNodes[3]
*/
   

//abre o modal
    let getCadastro = document.querySelector('#cadastro')
    getCadastro.innerHTML = 
    `<div class="modal" id="NewDev">
        <div class="modal-janela">

            <h1 class="modal-titulo">Editar Desenvolvedor ${id}</h1>

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

//função para fechar o modal
    function fechar(){
        document.getElementById('NewDev').style.display = "none"
    }
    
//listeners para fechar o modal
    document.getElementById('cancelar-dev').addEventListener('click',fechar)

    window.onclick = function(event){
        if(event.target == document.getElementById('NewDev')){
            fechar()
        }
    }

//listener para confirmar edição
    document.getElementById('enviar-dev').addEventListener('click',deleteDevConfirmed)

    function deleteDevConfirmed () {
//atualiza array local
        arrayDev[divPointer].cardavatar = document.getElementById('favatar').value 
        arrayDev[divPointer].cardnome = document.getElementById('fnome').value
        arrayDev[divPointer].cardcargo = document.getElementById('fcargo').value
        arrayDev[divPointer].cardgithub = document.getElementById('fgithub').value
        arrayDev[divPointer].cardlinkedin = document.getElementById('flinkedin').value

//atualiza o local Storage
        localStorage.setItem('devStorage',JSON.stringify(arrayDev))

        setLista()
        fechar()
    }

}


