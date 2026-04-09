  let item1 = document.getElementById("item1")
    let img = document.getElementById("img")
    let item2 = document.getElementById("item2")
    let item3 = document.getElementById("item3")
    let item4 = document.getElementById("item4")
    let item5 = document.getElementById("item5")

   let botoes = document.querySelectorAll("#item4 .num")
   
let notaSelecionada = null

function nume(nota) {
    
    notaSelecionada = nota
    console.log("nota escolhida:", nota)
    botoes.forEach(botao => {
        botao.classList.remove("ativo")
    })

  
    botoes[nota - 1].classList.add("ativo")
    console.log("nota escolhida:", nota)
    
}

function clicou() {
  

    img.src="interactive-rating-component-main/interactive-rating-component-main/images/illustration-thank-you.svg"
    img.style.height = "250px"
    img.style.width = "350px"
    item1.style.padding = "20px 60px"
      item1.style.height = "250px"
    item1.style.width = "450px"
    item1.style.background = "#1F2630"

    if (notaSelecionada == 1) {
        item2.innerText = "You selected 1 out of 5"
        item2.style.padding = "10px 110px"
        item2.style.margin = '40px 0px'
        item2.style.background = "#262F38"
        item2.style.color = "orange"
        item2.style.borderRadius = "50px"
    } else if(notaSelecionada == 2){
         item2.innerText = "You selected 2 out of 5"
          item2.style.padding = "10px 110px"
        item2.style.margin = '40px 0px'
        item2.style.background = "#262F38"
        item2.style.color = "orange"
        item2.style.borderRadius = "50px"
    } else if(notaSelecionada == 3){
         item2.innerText = "You selected 3 out of 5"
          item2.style.padding = "10px 110px"
        item2.style.margin = '40px 0px'
        item2.style.background = "#262F38"
        item2.style.color = "orange"
        item2.style.borderRadius = "50px"
    } else if(notaSelecionada == 4){
         item2.innerText = "You selected 4 out of 5"
          item2.style.padding = "10px 110px"
        item2.style.margin = '40px 0px'
        item2.style.background = "#262F38"
        item2.style.color = "orange"
        item2.style.borderRadius = "50px"
    } else if (notaSelecionada == 5) {
         item2.innerText = "You selected 5 out of 5"
          item2.style.padding = "10px 110px"
        item2.style.margin = '40px 0px'
        item2.style.background = "#262F38"
        item2.style.color = "orange"
        item2.style.borderRadius = "50px"
    } else{
        item2.innerText = "You selected 0 out of 5"
         item2.style.padding = "10px 110px"
        item2.style.margin = '40px 0px'
        item2.style.background = "#262F38"
        item2.style.color = "orange"
        item2.style.borderRadius = "50px"
    }
   item3.innerHTML = "Thank you!"
    item3.style.padding = "10px 140px"
    item3.style.fontSize = "2.4em"
    item3.style.color = "white"

   item4.innerHTML = " We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
   item4.style.fontSize = "1.4em"
    item4.style.color = "#A1A8B2"
    item4.style.display = "flex"
    item4.style.alignItems = "center"
    item4.style.justifyContent = "center"
    item4.style.padding = "10px"
  
   item5.innerText = ""
}

/*
  // pega a div da imagem (onde fica a estrela / depois muda)
  let item1 = document.getElementById("item1")

  // pega a imagem (vai trocar depois no submit)
  let img = document.getElementById("img")

  // pega a área onde vai aparecer "You selected..."
  let item2 = document.getElementById("item2")

  // pega o texto principal (pergunta / depois vira "Thank you!")
  let item3 = document.getElementById("item3")

  // pega a área dos botões (1 a 5)
  let item4 = document.getElementById("item4")

  // pega o botão submit
  let item5 = document.getElementById("item5")

  // pega todos os botões de número (1,2,3,4,5)
  let botoes = document.querySelectorAll("#item4 .num")
   
  // variável que guarda qual nota o usuário escolheu
  let notaSelecionada = null



  // função chamada quando o usuário clica em um número
  function nume(nota) {
    
      // salva a nota clicada
      notaSelecionada = nota

      // mostra no console (debug)
      console.log("nota escolhida:", nota)

      // percorre todos os botões
      botoes.forEach(botao => {

          // remove a classe "ativo" de todos (tira a cor)
          botao.classList.remove("ativo")
      })

      // adiciona a classe "ativo" no botão clicado
      // (nota - 1 porque começa do 0)
      botoes[nota - 1].classList.add("ativo")

      // mostra de novo no console
      console.log("nota escolhida:", nota)
    
  }



  // função chamada quando clica no botão SUBMIT
  function clicou() {
  
      // troca a imagem para a de "thank you"
      img.src="interactive-rating-component-main/interactive-rating-component-main/images/illustration-thank-you.svg"

      // muda tamanho da imagem
      img.style.height = "250px"
      img.style.width = "350px"

      // altera o container da imagem
      item1.style.padding = "20px 60px"
      item1.style.height = "250px"
      item1.style.width = "450px"
      item1.style.background = "#1F2630"


      // verifica qual nota foi escolhida
      if (notaSelecionada == 1) {

          // mostra texto da nota
          item2.innerText = "You selected 1 out of 5"

          // estilização da caixa
          item2.style.padding = "10px 110px"
          item2.style.margin = '40px 0px'
          item2.style.background = "#262F38"
          item2.style.color = "orange"
          item2.style.borderRadius = "50px"

      } else if(notaSelecionada == 2){

          item2.innerText = "You selected 2 out of 5"

          item2.style.padding = "10px 110px"
          item2.style.margin = '40px 0px'
          item2.style.background = "#262F38"
          item2.style.color = "orange"
          item2.style.borderRadius = "50px"

      } else if(notaSelecionada == 3){

          item2.innerText = "You selected 3 out of 5"

          item2.style.padding = "10px 110px"
          item2.style.margin = '40px 0px'
          item2.style.background = "#262F38"
          item2.style.color = "orange"
          item2.style.borderRadius = "50px"

      } else if(notaSelecionada == 4){

          item2.innerText = "You selected 4 out of 5"

          item2.style.padding = "10px 110px"
          item2.style.margin = '40px 0px'
          item2.style.background = "#262F38"
          item2.style.color = "orange"
          item2.style.borderRadius = "50px"

      } else if (notaSelecionada == 5) {

          item2.innerText = "You selected 5 out of 5"

          item2.style.padding = "10px 110px"
          item2.style.margin = '40px 0px'
          item2.style.background = "#262F38"
          item2.style.color = "orange"
          item2.style.borderRadius = "50px"

      } else{

          // caso não tenha selecionado nada
          item2.innerText = "You selected 0 out of 5"

          item2.style.padding = "10px 110px"
          item2.style.margin = '40px 0px'
          item2.style.background = "#262F38"
          item2.style.color = "orange"
          item2.style.borderRadius = "50px"
      }


      // muda o texto principal para "Thank you!"
      item3.innerHTML = "Thank you!"

      // estilização do texto
      item3.style.padding = "10px 140px"
      item3.style.fontSize = "2.4em"
      item3.style.color = "white"


      // substitui os botões por um texto de agradecimento
      item4.innerHTML = " We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"

      // estilização do texto final
      item4.style.fontSize = "1.4em"
      item4.style.color = "#A1A8B2"
      item4.style.display = "flex"
      item4.style.alignItems = "center"
      item4.style.justifyContent = "center"
      item4.style.padding = "10px"
  
      // remove o botão submit (limpa o conteúdo)
      item5.innerText = ""
}
*/