import { setCard } from "./card.js"

export function setDev () {

    //get das variaveis
    let nome = document.getElementById('fnome').value
    let avatar = document.getElementById('favatar').value
    let cargo = document.getElementById('fcargo').value
    let github = document.getElementById('fgithub').value
    let linkedin = document.getElementById('flinkedin').value
    let id = localStorage.getItem('devNum')
    
    criarStorage(id,nome,avatar,cargo,github,linkedin)

//contador
//busca no localstorage, se estiver vazio retorna 1
    if(localStorage.getItem('devNum')!=''){
        localStorage.setItem('devNum',1)
    }

//set novo card com os dados do formulario
    setCard(id,nome,avatar,cargo,github,linkedin)
}

//armazena as vaa
function criarStorage (id,nome,avatar,cargo,github,linkedin){
//se devNum estiver vazio recebe 1
    if(localStorage.getItem('devNum')!=''){
        localStorage.setItem('devNum',1)
    }

//atualiza localstorage
    localStorage.setItem('devNum',id.value)
    localStorage.setItem('id',id.value)
    localStorage.setItem('nome'+id.value,nome.value)
    localStorage.setItem('avatar'+id.value,avatar.value)
    localStorage.setItem('cargo'+id.value,cargo.value)
    localStorage.setItem('github'+id.value,github.value)
    localStorage.setItem('linkedin'+id.value,linkedin.value)

}