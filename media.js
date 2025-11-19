let n1  = Number(prompt("Digite a primeira nota"))
let n2 = Number(prompt("Digite a segunda nota"))
let n3 = Number(prompt("Digite a terceira nota"))
let n4 = Number(prompt("Digite a quarta nota"))
let resultado = n1 + n2 + n3 + n4 
let media = resultado / 4

alert(`A media do aluno é ${media}`)

if (media >= 7) {
    alert(`Aluno aprovado com a media ${media}`)
} else {
    alert(`Aluno reprovado com a media ${media}`)
}