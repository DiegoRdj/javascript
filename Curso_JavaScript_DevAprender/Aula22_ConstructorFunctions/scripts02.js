function PersonaJogo(PersonaFav, Prota, Jogo){
    this.PersonaFav = PersonaFav;
    this.Prota = Prota;
    this.Jogo = Jogo;
    this.jogar = function() {
        console.log("JOgando...")
    };
}
const jogar = new PersonaJogo("Persona 5", "Ren", 5)
console.log(jogar)