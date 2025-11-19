/* let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"] Array/Vetores 


console.log(frutas[frutas.length - 1])  Sempre pega o ultimo valor 
*/

let filmes = ["O Telefone Preto", "Vingadores Ultimato", "Velozes e Furiosos", "Matrix", "Pixel"]

filmes[1] = "Peppa Pig" // Altera o valor na posição escolhida

filmes.push("Cidade de Deus") /* Insere +1 elemento no final */ 
filmes.unshift("Up Altas Aventuras") /* Insere +1 elemento no começo */ 
filmes.pop() // remove o ultimo indice do array
filmes.shift() // remove o primeiro indice do array
/*  
console.log(filmes[0])
console.log(filmes[1])
console.log(filmes[2])
console.log(filmes[3])
console.log(filmes[4])
*/

/* for(let i = 0; i < filmes.length; i++){ // enquanto for menor que o numero total de indices (nesse caso, 5), ele apresenta o proximo
    console.log(filmes[i])
} */

for (const filme of filme) {
    console.log(filme)
}
