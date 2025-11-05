function clicar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo =document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel'
        window.alert('[ERRO] Coloque numeros')
        
    } else {
       res.innerHTML = 'Contando: '
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0) {
        window.alert('Passo invalido! Considerando passo 1')
        p = 1
       }
        if (i < f) {
             for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} 👉`
       }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉`
            }
        }
           res.innerHTML += `🏁`
    }
}








//👉 🏁