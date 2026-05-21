//Intreando um array
const numereros = [1,2,3,4,5]
const personas = ["Joker", "Makoto", "Yu"]

// ForEach
numereros.forEach(function(numereros){
console.log(numereros)
})

// OU 

numereros.forEach((numereros,indice) => console.log(numereros,indice))

for (const persona of personas) {
    console.log(persona)
}
console.log("\n")
personas.forEach(function(personas){
    console.log(personas)
})
console.log("\n")
personas.forEach((personas) => console.log(personas))