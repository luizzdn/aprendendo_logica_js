const botao = document.querySelector("#botao")
const titulo = document.querySelector("#titulo")

function trocaTexto(){
    titulo.innerText = "mt"
}

botao.addEventListener("click", trocaTexto)