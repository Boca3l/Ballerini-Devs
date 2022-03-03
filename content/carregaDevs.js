
export function carregaLista(busca){
//aponta card container
    let getContainer = document.querySelector('#card-container')

    if(localStorage.getItem('devStorage')==null || JSON.parse(localStorage.getItem('devStorage'))[0].cardid==null){
        getContainer.innerHTML = "<h1>Não há Devs a serem exibidos</h1>"

    }if(busca[0] != null){
        //carrega array temporário da busca
        if(busca[0] == 0){
            getContainer.innerHTML = "<h1>Não há Devs com estes parâmetros a serem exibidos</h1>"
        }else{
         carregar(busca)
        }
    }else{
        //carrega array local Storage
        let arrayStorage = JSON.parse(localStorage.getItem('devStorage'))
        carregar(arrayStorage)
    }

// ForEAch para carregar os arrays na tela
    function carregar(arrayDev){

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
    }
} 
