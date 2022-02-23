
export function setDev () {

    //get das variaveis
    let nome = document.getElementById('fnome')
    let avatar = document.getElementById('favatar')
    let cargo = document.getElementById('fcargo')
    let github = document.getElementById('fgithub')
    let linkedin = document.getElementById('flinkedin')
    //contador
    let id = 1

    criarStorage(id,nome,avatar,cargo,github,linkedin)
    
}

function criarStorage (id,nome,avatar,cargo,github,linkedin){
    
    if(localStorage.getItem('devNum')!=''){
        localStorage.setItem('devNum',id)
    }


//atualiza localstorage
    localStorage.setItem('devNum',id.value)
    localStorage.setItem('id',id.value)
    localStorage.setItem('nome'+localStorage.getItem('devNum'),nome.value)
    localStorage.setItem('avatar'+localStorage.getItem('devNum'),avatar.value)
    localStorage.setItem('cargo'+localStorage.getItem('devNum'),cargo.value)
    localStorage.setItem('github'+localStorage.getItem('devNum'),github.value)
    localStorage.setItem('linkedin'+localStorage.getItem('devNum'),linkedin.value)

    id++;
    localStorage.setItem('devNum',id)
}