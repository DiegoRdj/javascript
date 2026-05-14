// Js Aula 46 - COntrutor  function(ex)

// Criar um objeto postagem
//Titulo, mensagem, autor, visualizacoes, coemntarops e ao vivo ou Nenhum

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacao = 0,
    this.comentarios = [],
    this.estaAoVibo = false

}

let postagem = new Postagem("a", "b" , "c");
console.log(postagem)
