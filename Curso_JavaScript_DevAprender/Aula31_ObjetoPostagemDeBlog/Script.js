// Js Aula 45 - Objeto Postagem de Blog (ex)

let postagem = {
    titulo: "Nenhum",
    mensagem: "Codigo morse",
    autor: "Pablo Picasso",
    visualizacoes: 676767,
    comentarios : [
        {autor : "Joseph Seed",
        mensagem : ";-;"},
        {autor : "Jacob Seed",
        mensagem : "'-'"},
        {
        autor : "Jonh Seed",
        mensagem : ">:("
        },
        {autor : "Faith Seed",
        mensagem : ":P"}
        
    ],
    estaAoVivo: "Sim"
}
function postagesn(postagem) {
    for (let key in postagem){
        console.log(key, postagem[key])
    }
    
}
postagesn(postagem)