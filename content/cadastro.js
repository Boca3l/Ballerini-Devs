import {setDev} from './novoDev.js';


export function setCadastro () {
//abre o modal
    let getCadastro = document.querySelector('#cadastro')
    getCadastro.innerHTML = 
    `<div class="modal" id="NewDev">
        <div class="modal-janela">

            <h1 class="modal-titulo">Adicionar Desenvolvedor</h1>

            <div class="form">

                <div class="item">
                    <label for="fnome" class="modal-texto">Nome</label>
                    <input type="text" name="fnome" id="fnome">
                </div>

                <div class="item">
                    <label for="fvatar" class="modal-texto">Avatar</label>
                    <input type="text" name="favatar" id="favatar">
                </div>

                <div class="item">
                    <label for="fcargo" class="modal-texto">Cargo</label>
                    <input type="text" name="fcargo" id="fcargo">
                </div>

                <div class="item">
                    <label for="fgithub" class="modal-texto">Github</label>
                    <input type="text" name="fgithub" id="fgithub">
                </div>

                <div class="item">
                    <label for="flinkedin" class="modal-texto">Linkedin</label>
                    <input type="text" name="flinkedin" id="flinkedin">
                </div>

            </div>

            <input type="button" value="Cancelar" class="btn-g" id="cancelar-dev">
            <input type="button" value="Enviar" class="btn-g" id="enviar-dev">

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

//listener para criar o novo Dev

    let listEnviar = document.getElementById('enviar-dev')
    listEnviar.addEventListener('click',setDev)
    listEnviar.addEventListener('click',fechar)


}