
export function VoltarLista(){
    let voltar = document.getElementById('card-container')
    let posAtual = voltar.scrollLeft

    voltar.scroll(posAtual-270,0)
}

export function AvancarLista(){
    let avancar = document.getElementById('card-container')
    let posAtual = avancar.scrollLeft

    avancar.scroll(posAtual+270,0)
}