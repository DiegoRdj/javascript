const jogo = {
    nome: "Persona",
    personagens: {
        Persona5 : "Joker",
        Persona4 : "Yu",
        Persona3 : "Makoto",
    },
    jogo: "Persona 5",
    jogar : function(){
        console.log("Jogando")
    }
}

function jogarJogo(nome, personagens, jogo){
    return{
        nome,
        personagens,
        jogo,
        jogar() {
            console.log("Jogando.....")
        }
    }
}

let jogo1= jogarJogo("Personas", "Makoto", "Persona3")
console.log(jogo1)