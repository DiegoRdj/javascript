
function verificar(){
    let nome = ["itadori", "Nobara", "Fushiguro", "Gojo"]
    let inome = document.getElementById("nome").value
    let convite = document.getElementById("convite").value
    let p = document.getElementById("p")

    if (nome.includes(inome) && convite == "Yuta"){
        p.innerText = "Você pode entrar"
    }
    else{
         p.innerText = "Você não pode entrar"
    }
}