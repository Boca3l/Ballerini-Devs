
import { setLista } from "./listaDev.js"

export function editarConfirm() {
    
//recupera ao Id da div a ser editada
    let divId = localStorage.getItem('editarDiv')
    
//cria variável para receber o objeto DEV
    let editDev

//pega o array eo indice a ser editado
//passa valores do dev para o editDev
    let arrayDev = []
    arrayDev = JSON.parse(localStorage.getItem('devStorage'))

    arrayDev.forEach(item => {
        if (item.cardid == divId) {
            editDev = item
        }
    });

//abre o modal
    let getCadastro = document.querySelector('#cadastro')
    getCadastro.innerHTML = 
    `<div class="modal" id="NewDev">
        <div class="modal-janela">

            <h1 class="modal-titulo">Editar Desenvolvedor ${editDev.cardid}</h1>

            <div class="form">

                <div class="item">
                    <label for="fnome" class="modal-texto">Nome</label>
                    <input type="text" name="fnome" id="fnome" value="${editDev.cardnome}">
                </div>

                <div class="item">
                    <label for="fvatar" class="modal-texto">Avatar</label>
                    <input type="text" name="favatar" id="favatar" value="${editDev.cardavatar}">
                </div>

                <div class="item">
                    <label for="fcargo" class="modal-texto">Cargo</label>
                    <input type="text" name="fcargo" id="fcargo" value="${editDev.cardcargo}">
                </div>

                <div class="item">
                    <label for="fgithub" class="modal-texto">Github</label>
                    <input type="text" name="fgithub" id="fgithub" value="${editDev.cardgithub}">
                </div>

                <div class="item">
                    <label for="flinkedin" class="modal-texto">Linkedin</label>
                    <input type="text" name="flinkedin" id="flinkedin" value="${editDev.cardlinkedin}">
                </div>

            </div>

            <input type="button" value="Cancelar" class="btn-g" id="cancelar-dev">
            <input type="button" value="Salvar" class="btn-g" id="enviar-dev">

        </div>
    </div>
    `;

    function deleteDevConfirmed () {
    //atualiza o edit dev
        editDev.cardavatar = document.getElementById('favatar').value 
        editDev.cardnome = document.getElementById('fnome').value
        editDev.cardcargo = document.getElementById('fcargo').value
        editDev.cardgithub = document.getElementById('fgithub').value
        editDev.cardlinkedin = document.getElementById('flinkedin').value

    //atualiza array local
        arrayDev.forEach(item => {
            if (item.cardid === divId) {
                arrayDev[arrayDev.indexOf(item)] = editDev
            }
        });

    //atualiza o local Storage
        localStorage.setItem('devStorage',JSON.stringify(arrayDev))
            setLista()
            fechar()
    }

//listener para confirmar edição
    document.getElementById('enviar-dev').addEventListener('click',deleteDevConfirmed)
    
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

}


