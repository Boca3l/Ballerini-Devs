import {createBtnEventDeletar, createBtnEventEditar} from './listaDev.js'
import cDev from './cardclass.js'

export function setCard(id,nome,avatar,cargo,github,linkedin){

    let cardid = localStorage.getItem('devNum')
    let cardnome
    let cardavatar
    let cardcargo
    let cardgithub
    let cardlinkedin
    
//Valores Default
    if(id==''){cardid=1}else{cardid=id}
    if(nome==''){cardnome='Pedro Teixeira'}else{cardnome=nome}
    if(avatar==''){cardavatar='avatares/avt1.jpg'}else{cardavatar=avatar}
    if(cargo==''){cardcargo='Estudante Front-End'}else{cardcargo=cargo}
    if(github==''){cardgithub='#'}else{cardgithub=github}
    if(linkedin==''){cardlinkedin='#'}else{cardlinkedin=linkedin}

    let getContainer = document.querySelector('#card-container')
    getContainer.innerHTML +=
    `
        <div class="CardDev1" id="${cardid}">

            <div class="card-card">
                <img src='${cardavatar}' alt="" class="card-avatar"/>
                <div class="linha"></div>
                <div class="card-dados">
                    <h1>${cardnome}</h1>
                    <h2>${cardcargo}</h2>
                </div>
                <div class="card-links">
                    <a href="${cardgithub}" target="_blank"><img src="img/icone-github.svg" alt=""></a>
                    <a href="${cardlinkedin}" target="_blank"><img src="img/icone-linkedin.svg" alt=""></a>
                    <input type="button" value="Ver Mais" class="vermais">
                </div>
            </div>

            <div class="card-controles">
                <input type="button" value="Editar" class="editar vermais" id="editar${cardid}">
                <input type="button" value="Deletar" class="deletar vermais" id="deletar${cardid}">
            </div>

        </div>
    `

    //atualiza numero do id
    cardid++
    localStorage.setItem('devNum',cardid)

    //armazena conteudo do container em divHtml no localStorage
    let divHtml = document.getElementById('card-container').innerHTML
    localStorage.setItem('divHtml',divHtml)

    createBtnEventDeletar()
    createBtnEventEditar()

}