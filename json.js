function pegarDados() {
    fetch('pessoas.json') /* fetch é uma função usada para buscar dados de algum lugar */
    .then(resposta => resposta.json()) /* Converte a resposta em json */
    .then(dados => /* Usa o json convertido */ {
        const { nome, descricao } = dados
        const container = document.querySelector (".container")

        
        dados.forEach(pessoa => { /* ForEach percorre todo array (metodo), pessoa é cada item do array (element do metodo)*/
            const { nome, descricao } = pessoa /* criar uma variavel que armazena nome e descricao = pessoa (elemento) */
            const div = document.createElement("div") /*  variavel div cria uma div no html (document.createElement cria a div) */
            div.classList.add('card')

            div.innerHTML = `<h2>${nome}</h2>
            <p>${descricao}</p>`

            container.appendChild(div)
            
        })
    }) 
}

pegarDados()