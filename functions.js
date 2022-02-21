let c = 2

//carrega as paginas sem refresh
function noRefresh(indice,target){
    let corpo = document.body.querySelector('#'+target)
    let url = './content/'+indice+'.html'


    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {
        if(xml.readyState == 4 && xml.status == 200){
            corpo.innerHTML = xml.responseText
        }
    }

    xml.open("GET",url,true)
    xml.send()

}

//botão fechar/cancelar
function fechar(indice){
    modal = document.body.querySelector('#'+indice)
    modal.style.display = 'none'
}

//fecha modal ao clicar fora da caixa
window.onclick = function(event) {
    modal = document.body.querySelector('#NewDev')
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

//objeto Meu card para lidar com parametros
let meuCard = {

    nome: "Pedro Teixeira",
    cargo: "Estudante Front-End",
    avatar: "avatares/avt1.jpg",
    git: '#',
    link: '#',

}

//função que lê os parametros e cria um novo card
function novoCard(){

    //novo objeto
    let dev = meuCard;
    //leitura de variáveis
    dev.nome = document.body.querySelector('#fnome').value
    dev.cargo = document.body.querySelector('#fcargo').value
    dev.avatar = document.body.querySelector('#favatar').value
    dev.git = document.body.querySelector('#fgithub').value
    dev.link = document.body.querySelector('#flinkedin').value

    //criar div
    let div = document.createElement('div');
    div.setAttribute('id','CardDev'+c)
    
    //seleciona local de criação da div
    let container = document.getElementById('card-container')
    //exibe a nova div
    container.appendChild(div)
    //atualiza com os dados do modelo e modal
    div.innerHTML = addCard(dev.nome,dev.cargo,dev.avatar,dev.git,dev.link)

    //conta +1 div
    c++;

    populateStorage()

}

function addCard (nome,cargo,avatar,git,link){
    
    if(nome==''){ nome='Dev Test'+c}
    if(cargo==''){ cargo='Cargo'+c}
    if(avatar==''){ avatar='avatares/avt1.jpg'}

    let id = 'DevCard'+c

    return(
    `
        <div class="card-card">
            <img src="${avatar}" alt="" class="card-avatar">
            <div class="linha"></div>
            <div class="card-dados">
                <h1>${nome}</h1>
                <h2>${cargo}</h2>
            </div>
            <div class="card-links">
                    <img href="${git}" src="../img/icone-github.svg" alt="">
                    <img href="${link}" src="../img/icone-linkedin.svg" alt="">
                    <input type="button" value="Ver Mais" class="vermais">
            </div>
        </div>

        <div class="card-controles">
            <input type="button" value="Editar" class="vermais" id="editar">
            <input type="button" value="Deletar" class="vermais" id="deletar">
        </div>
    `
    );
}

//cria o local storage para a div - loadCard
function populateStorage(){
    let container = document.getElementById('card-container')
    localStorage.setItem('loadCard',container.innerHTML)
    setCard()
}

//
function setCard(){
    if(c>1){
        let cardAtual = localStorage.getItem('loadCard')
        document.getElementById('card-container').innerHTML = cardAtual
    }
}