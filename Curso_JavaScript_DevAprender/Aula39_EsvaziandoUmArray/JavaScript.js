//combinando e cortando array
const primeiro = [1,2,3]
const segundo = [4,5,6]
const terceiro = [{id: 1}]
terceiro[0].id = 10;

//combinar
const combinado = primeiro.concat(segundo).concat(terceiro);
console.log(combinado)

//Dividir 
const cortado = combinado.slice(1,3) //indice 1 e 3 - retorno: 2, 3
//console.log(cortado)

combinado.slice(1) // =  2 3,4,5,6