import {createBtnEventDeletar, createBtnEventEditar} from './listaDev.js'

export function setCard(id,nome,avatar,cargo,github,linkedin){
//cria lista de Devs
    let arrayDev = []
//cria objeto Dev com valores Default
    let Dev = {
        cardid : id,
        cardnome : 'Pedro Teixeira',
        cardavatar : 'avatares/avt1.jpg',
        cardcargo : 'Estudante Front-End',
        cardgithub : '#',
        cardlinkedin : '#',
    }
    
//Valores atualiza os valores
    if(nome!=''){Dev.cardnome=nome}
    if(avatar!=''){Dev.cardavatar=avatar}
    if(cargo!=''){Dev.cardcargo=cargo}
    if(github!=''){Dev.cardgithub=github}
    if(linkedin!=''){Dev.cardlinkedin=linkedin}

//Se ja houver valor no Local Storage atualiza a lista
//senão cria o array no Storage e atualiza o array
    if(localStorage.getItem('devStorage')==null){
        arrayDev.push(Dev)
        localStorage.setItem('devStorage',JSON.stringify(arrayDev))
    }else{
        arrayDev = JSON.parse(localStorage.getItem('devStorage'))
        arrayDev.push(Dev)
        localStorage.setItem('devStorage',JSON.stringify(arrayDev))
    }

//limpa div antes de iniciar
    let getContainer = document.querySelector('#card-container')
    getContainer.innerHTML = ''

//para cada item da lista cria um novo card
    arrayDev.forEach(item => {
        getContainer.innerHTML +=
        `
            <div class="CardDev1" id="${item.cardid}">

                <div class="card-card">
                    <img src='${item.cardavatar}' alt="" class="card-avatar"/>
                    <div class="linha"></div>
                    <div class="card-dados">
                        <h1>${item.cardnome}</h1>
                        <h2>${item.cardcargo}</h2>
                    </div>
                    <div class="card-links">
                        <a href="${item.cardgithub}" target="_blank"><img src="img/icone-github.svg" alt=""></a>
                        <a href="${item.cardlinkedin}" target="_blank"><img src="img/icone-linkedin.svg" alt=""></a>
                        <input type="button" value="Ver Mais" class="vermais">
                    </div>
                </div>

                <div class="card-controles">
                    <input type="button" value="Editar" class="editar vermais" id="editar${item.cardid}">
                    <input type="button" value="Deletar" class="deletar vermais" id="deletar${item.cardid}">
                </div>

            </div>
        `
    });

    createBtnEventDeletar()
    createBtnEventEditar()

}