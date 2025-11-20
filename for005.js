let numero = Number(prompt("Digite o número"))
let soma = 0

for(let contador = 0; contador <= numero; contador++){
    soma = soma + contador
    let resultadoSoma = soma + contador
    console.log(`${soma} + ${contador} = ${resultadoSoma}`)
}