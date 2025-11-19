const botao = document.querySelector("#btn")
alert("olá")

function chamaFuncao() {
    alert("olá")
    segundaFuncao()
}

function segundaFuncao() {
    alert("segunda funcao chamada")
    terceiraFuncao()
}

function terceiraFuncao() {
    alert("terceira funcao chamada")
    quartafuncao()
}
function quartafuncao() {
    alert("quarta funcao chamada")
    quintaFuncao()
}
function quintaFuncao() {
    alert("quinta funcao chamada")
}

botao.addEventListener(`click`, chamaFuncao)