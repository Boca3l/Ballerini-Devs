import {setLanding} from './landing.js';

export function setNav () {

    let getHeader = document.body.querySelector('#cabecalho')

//criar nav
    let nav = document.createElement('nav')
    nav.id = 'menu'
    getHeader.appendChild(nav)
    //criar ul
    let ulRedes = document.createElement('ul')
    ulRedes.className = 'redes'
    nav.appendChild(ulRedes)
    //criar Li
    let liLink = document.createElement('li')
    let liFace = document.createElement('li')
    let liDiscord = document.createElement('li')
    ulRedes.appendChild(liLink)
    ulRedes.appendChild(liFace)
    ulRedes.appendChild(liDiscord)
    //criar a 
    let aLink = document.createElement('a')
    aLink.href = "https://www.linkedin.com/in/preisteixeira/"
    aLink.target = "_blank"
    let aFace = document.createElement('a')
    aFace.href  = "https://www.facebook.com/pepeuh/"
    aFace.target = "_blank"
    let aDiscord = document.createElement('a')
    aDiscord.href = "https://discord.gg/xdYykQkq"
    aDiscord.target = "_blank"
    liLink.appendChild(aLink)
    liFace.appendChild(aFace)
    liDiscord.appendChild(aDiscord)
    //criar img
    let imgLink = document.createElement('img')
    imgLink.src = "img/linkedin.svg"
    imgLink.className = "Link"
    let imgFace = document.createElement('img')
    imgFace.src = "img/facebook.svg"
    imgFace.className = "Face"
    let imgDiscord = document.createElement('img')
    imgDiscord.src = "img/discord.svg"
    imgDiscord.className = "Discord"
    aDiscord.appendChild(imgDiscord)
    aLink.appendChild(imgLink)
    aFace.appendChild(imgFace)

//criar Logo central
    //necessario criar function para redirecionamento
    //Create elements
    let linkLogo = document.createElement('a')
    linkLogo.className = 'logo'
    let imgLogo = document.createElement('img')
    imgLogo.src = "img/Logo-ballerini devs.svg"
    let txtLogo = document.createElement('p')
    txtLogo.className = "maven"
    txtLogo.innerText = "Ballerini Devs"
    //appendChild
    nav.appendChild(linkLogo)
    linkLogo.appendChild(imgLogo)
    linkLogo.appendChild(txtLogo)

//criar Search Input
    let busca = document.createElement('input')
    busca.type = 'search'
    busca.placeholder = 'Buscar'
    busca.id = 'buscar'
    busca.className = 'buscar'
    busca.style.visibility = 'hidden'
    
    nav.appendChild(busca)

//event listener for Logo
    let listLogo = document.querySelector('a.logo')
    listLogo.addEventListener('click',setLanding)
    listLogo.addEventListener('click',hidebusca)
    
    function hidebusca () {
        document.getElementById('buscar').style.visibility = "hidden"
    }

};

