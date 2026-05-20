
let erro = document.getElementById("erro")

function button(){

    let email = document.getElementById("imail").value
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        erro.innerHTML = "Tudo certo!"
        erro.style.color = "green"
        erro.style.fontWeight = "bolder"
        erro.style.paddingLeft = "50px"
        erro.style.paddingTop = "10px"
        erro.style.fontSize = "1.2em"
    } else{
        erro.innerHTML = "burro!"
        erro.style.color = "red"
        erro.style.fontWeight = "bolder"
        erro.style.paddingLeft = "50px"
        erro.style.paddingTop = "10px"
        erro.style.fontSize = "1.2em"
    }
}