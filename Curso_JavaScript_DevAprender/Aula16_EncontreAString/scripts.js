// Criar um metodo para ler propriedades de um objeto e 
//exibir somente as propriedades do tpo String nesse objeto

const musica = {
    Nome:"Une vie à t'aimer",
    Ano: 2025,
    Autor: "Lorien Testard",
    Cantora: "Alice"
}

exibirPropriedades (musica);
function exibirPropriedades(obj) {
    for (prop in obj) {
        if ( typeof obj[prop] === 'string'){
            console.log(prop, obj[prop])
        }
    }
}