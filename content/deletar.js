import {editarLista} from './editarLista.js'

export function deletarConfirm() {

    let div = localStorage.getItem('excluirDiv')

//abre o modal
    let getCadastro = document.querySelector('#cadastro')
    getCadastro.innerHTML = 
    `<div class="modal" id="NewDev">
        <div class="modal-janela">

            <h1 class="modal-titulo">Tem certeza que deseja excluir este Dev?</h1>

            <input type="button" value="Cancelar" class="btn-g" id="cancelar-dev">
            <input type="button" value="Excluir" class="btn-g" id="enviar-dev">

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

//listener para confirmar exclusão
    document.getElementById('enviar-dev').addEventListener('click',deleteDevConfirmed)

    function deleteDevConfirmed () {
        let excluirdiv = document.getElementById(div)
        excluirdiv.parentNode.removeChild(excluirdiv)
        editarLista()
        fechar()
    }

}


