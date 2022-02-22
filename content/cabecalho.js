//busca elemento pai
let header = document.querySelector('cabecalho')

//criar nav
const nav = document.createElement('nav')
nav.id = 'menu'
//criar ul
const ulRedes = document.createElement('ul')
ulRedes.className = 'redes'
//criar Li
const liLink = document.createElement('li')
const liFace = document.createElement('li')
const liDiscord = document.createElement('li')
//criar a 
const aLink = document.createElement('a')
aLink.href = "https://www.linkedin.com/in/preisteixeira/"
aLink.target = "_blank"
const aFace = document.createElement('a')
aFace.href  = "https://www.facebook.com/pepeuh/"
aFace.target = "_blank"
const aDiscord = document.createElement('a')
aDiscord.href = "https://discord.gg/xdYykQkq"
aDiscord.target = "_blank"
//criar img
const imgLink = document.createElement('img')
imgLink.src = "img/linkedin.svg"
const imgFace = document.createElement('img')
imgFace.src = "img/facebook.svg"
const imgDiscord = document.createElement('img')
imgFace.src = "img/discord.svg"

//caminho header>nav>ul>li>a>img
//incluir tags
header.appendChild(nav)

nav.appendChild(ul)

ul.appendChild(liLink,liFace,liDiscord)

liLink.appendChild(aLink)
liFace.appendChild(aFace)
liDiscord.appendChild(aDiscord)

aDiscord.appendChild(imgDiscord)
aLink.appendChild(imgLink)
aFace.appendChild(imgDiscord)

