var num = document.getElementById('num')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    return Number(n) >= 1 && Number(n) <= 100
}

function inLista(n, l){
    return l.indexOf(Number(n)) != -1
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('valor já inserido ou inválido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        alert('coloca algo')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma  = 0

        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) maior = valores[pos]
            if (valores[pos] < menor) menor = valores[pos]
        }

        var media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
