function contar(){
    var ini = document.getElementById('iini').value
    var fim = document.getElementById('ifim').value
    var pass = document.getElementById('ipass').value
    var res = document.getElementById('res')
   
    if (ini.length == 0 || fim.length == 0 || pass.length == 0) {
    res.innerHTML = 'Impossível contar, preencha todos os campos';
    return; 
}
var i = Number(ini)
var f = Number (fim)
var p = Number(pass)
if (p <= 0) {
    alert('passo invalido, Usando passo = 1.')
    p = 1
}

res.innerHTML = 'Contando: <br>'
var contagem = ''
if  (i < f) {
    for (var c = i; c <= f; c += p){
        contagem += c + '👉'
    }
} else {
    for (var c = i; c >= f; c -= p) {
        contagem += c + '👉';
    }
}
contagem += '🏁';
res.innerHTML += contagem
}