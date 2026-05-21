//ESvaziando um array

let numero = [1,2,3,4,5,6];

// Solução 1

//numero = [];

//Solção 2 =========> MELHOR

numero.length = 0

//Solução 3

numero.splice(0,numero.length)
console.log(numero)

