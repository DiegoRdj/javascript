// JS - Introducao aos arrays - Encontrando elementos

const marcar = [
    {id:1, nome: "a"},
    {id:2, nome: "b"}
]

const marca = marcar.find(function(marca){
    return marca.nome === "s";
})

console.log(marca)

