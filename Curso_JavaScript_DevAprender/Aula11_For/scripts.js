//For
//WHILE
//Do While


for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        console.log("É impar = "+i)
    }
}
//While

let j = 5
while (j>= 1) {
    if (j%2 !==0) {
        console.log(j)
    }
    j--
}
i = 0
//DO while
do {
    console.log("Digitando " + i)
    i++
} while(i <= 10)

    //for-in
    const pessoa = {
        nome: "Jhontham",
        idade: 25
    }
    for (const key in pessoa) {
        console.log(key, pessoa.nome)
        
    }
    const cores = [
        "vermelho", "Azul", "Amarelo"
    ]
    for (const key in cores) {
        console.log(key,cores[key])
        
    }
    //for-of
    for (const cor of cores) {
        console.log(cor)
    }
    let PERSONA  = [
        "PERSONA 1", "PERSONA 2", "PERSONA 3", "PERSONA 4", "PERSONA 5"
    ]
    for (const PEROSNA of PERSONA) {
        console.log(PEROSNA)
    }
