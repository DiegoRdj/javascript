// JS - Introducao aos arrays - Encontrando elementos

const numeros = [1,2,3,1,4,3];

//Vai acahar o 2 na posição [1]
console.log(numeros.indexOf(2))

//Encontrar a ultima vez q esse numero foi visto, posição[3]

console.log(numeros.lastIndexOf(1))

//Existe ou nao esse numero??
numeros.includes(2);

const PERSONA = ["PERSONA1","PERSONA2","PERSONA3","PERSONA4","PERSONA5"]

console.log(PERSONA.indexOf("PERSONA2"))

console.log(PERSONA.lastIndexOf("PERSONA4"))

console.log(PERSONA.includes("PERSONA3"))