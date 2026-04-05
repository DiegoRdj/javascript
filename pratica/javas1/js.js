let notaSelecionada = null

function nume(nota) {
    notaSelecionada = nota
    console.log("nota escolhida:", nota)
}

function clicou() {
    let item1 = document.getElementById("item1")
    let img = document.getElementById("img")
    let item2 = document.getElementById("item2")
    let item3 = document.getElementById("item3")
    let item4 = document.getElementById("item4")
    let item5 = document.getElementById("item5")

    let num1 = document.getElementsByClassName("num1")
    let num2 = document.getElementsByClassName("num2")
    let num3 = document.getElementsByClassName("num3")
    let num4 = document.getElementsByClassName("num4")
    let num5 = document.getElementsByClassName("num5")

    img.src="interactive-rating-component-main/interactive-rating-component-main/images/illustration-thank-you.svg"
   
}