






function converter(){
    let resultado = document.getElementById("resultado")
   let valorEmDolar = document.getElementById("valor").value //Pegar so o valor dentro do INPUT, IMPORTANTE!!!!!
    let dolarDoDia = 6

   let valorReal = valorEmDolar * dolarDoDia

   resultado.innerHTML = "R$" + valorReal
}
function converterR(){
    let resultado = document.getElementById("resultado")
   let valorEmDolar = document.getElementById("valor").value //Pegar so o valor dentro do INPUT, IMPORTANTE!!!!!
    let dolarDoDia = 6

   valorEmDolar = valorReal/dolarDoDia

   resultado.innerHTML = "$" + valorEmDolar
}