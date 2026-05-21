// Spread
const primeiro = [1,2,3]
const segundo = [4,5,6]

const combinado = [...primeiro, "abc" ,...segundo]
const novoComb = [...primeiro,"%", ...segundo]

//const cortado = combinado.slice() 

const clonado = [...combinado];

console.log(novoComb)
//Spread
