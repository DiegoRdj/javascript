var num = [5, 6, 2 ,1 ,9]
num.push(4)
num.sort()
console.log(num)
console.log(`o Vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
var pos = num.indexOf(4)
if(pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 4 esta na posição ${pos}`)
}
