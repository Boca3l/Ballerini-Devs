

export function setCard(){
    let getContainer = document.querySelector('#card-container')
    getContainer.innerHTML=
    `
        <div class="CardDev1">

            <div class="card-card">
                <img src="avatares/avt1.jpg" alt="" class="card-avatar">
                <div class="linha"></div>
                <div class="card-dados">
                    <h1>Pedro Teixeira</h1>
                    <h2>Estudante Front-End</h2>
                </div>
                <div class="card-links">
                    <img src="img/icone-github.svg" alt="">
                    <img src="img/icone-linkedin.svg" alt="">
                    <input type="button" value="Ver Mais" class="vermais">
                </div>
            </div>

            <div class="card-controles">
                <input type="button" value="Editar" class="vermais" id="editar">
                <input type="button" value="Deletar" class="vermais" id="deletar">
            </div>

        </div>
    `

}