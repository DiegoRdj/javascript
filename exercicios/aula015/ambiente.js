let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} numeros`)
console.log(`O primeiro valor de vetor é ${num[0]}`)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log(`O valor nao foi encontrado`)
} else {
    console.log(` O valor esta na posição ${pos}`)
}
