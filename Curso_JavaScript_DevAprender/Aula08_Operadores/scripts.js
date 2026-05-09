//Operadores Aritimeticos (matematicos)
//Operadores atribuição
//Operadores de Comparação
//Operadores Logiocos
//Operadores BitWise

//Operadores Aritimeticos

console.log("OPERADORES ARITIMETICOS")

let salario = 100;

//+, -, *, /, ** (ele * ele msm)

console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(5 ** 2)

//++ --
let idade = 18

console.log(++idade) //adiciona 1, se vier antes, ele adiciona antes de finalizar o console, imprime 19
console.log(idade++) // desse jeito imprime 19, ja q o ++ vem dps
console.log(idade) // imprime 20, vale para o --

console.log(idade--)
console.log(--idade)
console.log(idade)

console.log("=============================================")

//Operadores de Atribuição

console.log("OPERADORES DE ATRIBUIÇÃO")

let valaorTecladoGamer = 100;

//valorTecladoGamer = ValorTecladoGAmer + ValorTecladoGamer
valaorTecladoGamer += valaorTecladoGamer
console.log(valaorTecladoGamer)

console.log("=============================================")

//Operadores de Igualdade
//Igualdade Estrita
console.log("Operadores de Igualdade")
console.log( 1===1 ) //comparando os valores e tipo, number === number
console.log( " 1 " == 1) // comparando somente valores  

console.log("=============================================")

//Operadores Ternarios

console.log("Operadores Ternarios")
let pontos = 100;
let tipo = pontos > 100 ? 'premiaum' : 'comum'; // pontos é maior q 100? se sim, PREAMIUM, se não COMUM
console.log(tipo)

console.log("==============================================")

//Operadores Logicos
console.log("Operadores Logicos")

console.log(true&&true) // = True

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho == true ? "Pode Trabalhar": "Não pode";
console.log(podeAplicar)

//&& = E || = OU
console.log("====================================")
// Operador NOT (!)
console.log("Operadores NOT")

let candidatoRecusado =! podeAplicar

console.log("Candidato recusado " + candidatoRecusado)

console.log("====================================================")

//COmparador de Não Booleanos

console.log("Comparadores Não Booleanos")

//falsy = undefined, null, 0, NaN, false, " "
//Trythy 

let corPersonalizada = "Vermelho"
let corPadrao = "Azul"
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)