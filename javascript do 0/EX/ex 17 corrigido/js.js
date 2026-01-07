function contar(){
    var ini = document.getElementById('in')
    var fim = document.getElementById('fim')
    var pss = document.getElementById('pss') 
    var res = document.getElementById('res')

    if (ini.value.length == 0|| fim.value.length == 0 || pss.value.length == 0) {
        alert('coloque algo')
        return
    }

    var inicio = Number(ini.value)
    var final = Number(fim.value)
    var passo = Number(pss.value)

    if(passo <= 0) {
        alert('Passo invalido! sera utilizado passo 1')
        passo = 1
    }
    if (inicio < final) {
        for (var i = inicio; i <= final; i+= passo){
            res.innerHTML += `${i} 👉 `
        }
    }else{
        for (var i = inicio; i >= final; i -= passo) {
            res.innerHTML += `${i} 👉 `
        }
    }
    res.innerHTML += ' 🏁'
}
