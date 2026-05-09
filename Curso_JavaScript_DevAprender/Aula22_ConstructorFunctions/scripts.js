
//Factory Functions (Função de Fabrica)
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar (){
        console.log("Fazendo ligação...")
    }
    }
}
let celular1 = criarCelular("Zenfone", 5.5, 5000);
console.log(celular1)


//Pascal case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function () {
        console.log("fazendo ligação")
    }
}
const celular = new Celular("Samsung", 5.5, 10000)