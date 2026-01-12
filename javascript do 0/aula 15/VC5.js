var valores = [8, 7, 5, 2, 4]
valores.sort()
valores.push(12)
console.log(valores)

for(var pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}