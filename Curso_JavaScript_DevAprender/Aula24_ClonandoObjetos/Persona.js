const PERSONA = {
    jogo: "PERSONA 5",
    Nivel : {
        Persoangem1 : 40,
        Persoangem2 : 37,
        Persoangem3 : 43
    },
    Atacar : function(){
        console.log("Atacando...")
    }
}

const PERSONACopia = {...PERSONA}
console.log(PERSONACopia)
console.log(PERSONACopia.Atacar)