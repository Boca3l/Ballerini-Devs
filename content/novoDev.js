import { setCard } from "./card.js"

export function setDev () {

    //get das variaveis
    let nome = document.getElementById('fnome').value
    let avatar = document.getElementById('favatar').value
    let cargo = document.getElementById('fcargo').value
    let github = document.getElementById('fgithub').value
    let linkedin = document.getElementById('flinkedin').value
//cria local storage para contagem de itens
    criarStorage()
    let id = localStorage.getItem('devNum')

//set novo card com os dados do formulario
    setCard(id,nome,avatar,cargo,github,linkedin)
}

//armazena as vaa
function criarStorage (){
//se devNum estiver vazio recebe 1
    if(localStorage.getItem('devNum')==null){
        localStorage.setItem('devNum',1)
    }else{
        let c = Number(localStorage.getItem('devNum'))
        
        localStorage.setItem('devNum',c+1)
    }

}