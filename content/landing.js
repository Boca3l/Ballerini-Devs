export function setLanding () {

    let getConteudo = document.body.querySelector('#conteudo')

    getConteudo.innerHTML = 
        `
        <div class="container">
            <div class="container-conteudo">
                <h1 class="container-conteudo-titulo">O maior Banco de devs do país</h1>
                <p class="container-conteudo-texto">Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                <input type="button" value="Entre Agora" class="btn-g" />
            </div>
            <div class="container-img">
                <img src="img/Programador main.svg" id="coding"/>
            </div>
        </div>
        `
}