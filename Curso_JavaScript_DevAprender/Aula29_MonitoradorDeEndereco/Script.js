// Java Script - Objeto Endereço

//Criar um objeto endereco

//Criar um objeto q tenha:
// Rua
// Cidade 
// CEP
// ExbirEndereco

let endereco =  {
    rua:  "Rua aaa",
    cidade: "Lugar",
    cep: "Uns numero ai"
}
function exibirOEndereco(endereco) {
    for(let key in endereco){
        console.log(key, endereco[key])
    }
}
exibirOEndereco(endereco)

// JEITO dele

// let enderecos = {
//     rua:"A" ,
//     cidade:"B" ,
//     cep:"C" ,
// };

// function exibirOEndereco(endereco){
//     for (let chave in endereco){
//         console.log(chave, endereco[chave])
//     }
// }
// exibirOEndereco(enderecos);