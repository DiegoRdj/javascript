// JS - Faixa de Preço (EX)

// Crie um array de objetos de faixa de preço para que ela possa ser usadp em um site igual do mercado LIVRE

//Faixa ds, tooltip, minimo e maximo


//Primeira maneira para fazer

let faixas = [
    {tooltip: "Até 700", minimo: 0, maximo: 700},
    {tooltip: "de R$700 até 1000", minimo: 700, maximo: 1000},
    {tooltip: "R$1000 ou mais", minimo: 1000, maximo: 99999}
]

//Segunda opcão (factyor function)

function criarFuncao(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFuncao("Até 700", 0, 700),
    criarFuncao("de R$700 até 1000",700, 1000),
    criarFuncao("$R$1000 ou mais", 1000, 99999)
]



//Terceira opcao (constructor function)

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco("Até 700", 0, 700),
    new FaixaPreco("de R$700 até 1000",700, 1000),
    new FaixaPreco("$R$1000 ou mais", 1000, 99999)
]

console.log(faixas)
console.log(faixas2)
console.log(faixas3)
