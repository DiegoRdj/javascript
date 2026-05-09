 // Criar uma função que exibe aa quantidade de *;
 //que aquela linha possui
 exibirAsteriscos(10)

// Meu jeito

//  function exibirAsteriscos(linhas){
//     let aste = " "
//     for (let i = 1; i <= linhas; i++){
//         aste += "*"
//         console.log(aste)
//     }
//  }

// //Jeito dele 
// function exibirAsteriscos(linhas) {
//     let padrao = " ";
//     for (linha = 1; linha <= linhas; linha++){
//         padrao += "*"
//         console.log(padrao)
//     } 
// }
 
function exibirAsteriscos(linhas) {
    for (linha = 1; linha <= linhas; linha++){
        let padrao = ' '
        for (let i = 0; i < linha; i++){
            padrao += "*";
        }
        console.log(padrao)
    }
}