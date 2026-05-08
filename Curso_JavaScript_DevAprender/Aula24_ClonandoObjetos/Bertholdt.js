const celular = {
    marcaCelular : "POCOPHONE",
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function(){
        console.log("Fazendo Ligação...")
    }
}


 const novoObjeto = Object.assign({
    bateria:5000
 },celular)
 console.log(novoObjeto)

//Outro metodo

 const objeto2 = {...celular};
 console.log(objeto2)