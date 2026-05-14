// Igualdade de objetos (ex)

function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco("a", "b","C")
const endereco2 = new Endereco("a", "b","C")

function saoIguais(endereco1, endereco2){
    //Comparar se as propriedades sao iguais
    if (endereco1 === endereco2){
        console.log("São iguais")
    } else {
        console.log("São Diferentes")
    }
}

function temEnderecoMemoriaIguais(endereco1, endereco2){
    // Comparando se a referencia do objeto aponta para o msm local na memoria
    if (typeof endereco1 === typeof endereco2){
        console.log("São iguais")
    } else{
        console.log("São Diferentes")
    }
}
saoIguais(endereco1, endereco2)
temEnderecoMemoriaIguais(endereco1, endereco2)

//Jeito dele!

function saoIgual(endereco1, endereco2){
    //Comparar se as propriedades sao iguais
    return endereco1.rua == endereco2.rua && endereco1.cidade == endereco2.cidade && endereco1.cep === endereco2.cep

}
console.log(saoIgual(endereco1, endereco2))

function temEnderecoMemoriaIguai(endereco1, endereco2){
    // Comparando se a referencia do objeto aponta para o msm local na memoria
    return endereco1 === endereco2;
}

console.log(temEnderecoMemoriaIguai(endereco1, endereco2))