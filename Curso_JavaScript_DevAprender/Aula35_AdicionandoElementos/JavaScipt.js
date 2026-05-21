// JS - Introducao aos arrays - Adicionando elementos

const numeros = [ 1 ,2 ,3 ] 

// Inicio

numeros.unshift(0);
console.log(numeros)

//Meio

numeros.splice(1,0,"a")
console.log(numeros)

// Final 

numeros.push(5)
console.log(numeros)

const PERSONA = ["PERSONA1", "PERSONA2", "PERSONA3", "PERSONA4"]

PERSONA.unshift("Shin megami tensei")
console.log(PERSONA)

PERSONA.splice(2,0,"Shin megami tensei devil summoner raidou kunuzoha vs the soulessarm")
console.log(PERSONA)

PERSONA.push("PERSONA5")
console.log(PERSONA)