const abas = document.querySelectorAll('.aba')


abas.forEach(aba => {
    aba.addEventListener("click", () => {

        if(aba.classList.contains("selecionado")){
            return
        }
        selecioneAba(aba)

        mostrarEocultarDescricao(aba)
    })
})

function selecioneAba(aba){
    const abaSelecionada = document.querySelector('.aba.selecionado')

        abaSelecionada.classList.remove('selecionado')

        aba.classList.add('selecionado')
}

function mostrarEocultarDescricao(aba){
    const informacaoSelecionada = document.querySelector('.informacao.selecionado')
        informacaoSelecionada.classList.remove('selecionado')

        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}` 

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add('selecionado')
}