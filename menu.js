let opcao = Number(prompt(`
    Escolha uma opção
===========================
    [1] Salgado
    [2] Bebidas
    [3] Lanches
    [4] Sobremesas
    [5] Sair
===========================
`))

switch (opcao) {
    case 1:
        alert("Salgado")
        let sacolaSalgados = Number(prompt(`
Qual salgado deseja comprar?
===========================
[1] Coxinha - 1 Und R$ 5,00
[2] Bolinha de queijo - 1 Und R$ 5,00 
[3] Risole - 1 Und R$ 5,00
[4] Esfirra - 1 Und R$ 5,00
===========================
`))

switch (sacolaSalgados) {
    case 1:
        let unidadesCoxinha = Number(prompt(`Quantas unidades você deseja?`))

        let totalCoxinha = unidadesCoxinha * 5
        alert(`${unidadesCoxinha} Und Total = R$ ${totalCoxinha}`) 
        break;

    case 2:
        let unidadesBolinhaDeQueijo = Number(prompt(`Quantas unidades você deseja?`))

        let totalBolinhaDeQueijo = unidadesCoxinha * 5
        alert(`${unidadesBolinhaDeQueijo} Und Total = ${totalBolinhaDeQueijo}`) 
        break;

    case 3:
        let unidadesRisole = Number(prompt(`Quantas unidades você deseja?`))

        let totalRisole = unidadesCoxinha * 5
        alert(`${unidadesRisole} Und Total = ${totalRisole}`) 
        break;

    case 4:
        let unidadesEsfirra = Number(prompt(`Quantas unidades você deseja?`))

        let totalEsfirra = unidadesCoxinha * 5
        alert(`${unidadesEsfirra} Und Total = ${totalEsfirra}`) 
        break;

        

    default:
        break;
}
        break;

    case 2:
        alert("Bebidas")
        let sacolaBebidas = Number(prompt(`
Qual bebida deseja?
===========================
[1] Coca-Cola - 1 Und R$ 5,00
[2] Guaraná Antártica - 1 Und R$ 5,00
[3] Suco de Laranja natural - 1 Und R$ 5,00
[4] Água com gás - 1 Und R$ 5,00
===========================
            `))
        break;

    case 3:
        alert("Lanches")
        let sacolaLanches = Number(prompt(`
Qual lanche deseja comprar? 
===========================
[1] X-Burguer - 1 Und R$ 10,00
[2] X-Salada - 1 Und R$ 12,00
[3] X-Bacon - 1 Und R$ 14,00
[4] X-Tudo - 1 Und R$ 18,00
===========================          
            `))
        break;

    case 4:
        alert("Sobremesas")
        let sacolaSobremesas = Number(prompt(`
Qual sobremesa deseja comprar?
===========================
[1] Sorvete - 1 Und R$ 10,00
[2] Milk Shake - 1 Und R$ 10,00
[3] Açaí - 1 Und R$ 10,00
[4] Raspadinha - 1 Und R$ 10,00
===========================   
            `))
        break;

    case 5:
        alert("Sair")
        break;
    
    default:
        alert("Sistema finalizado")
        break;
}

