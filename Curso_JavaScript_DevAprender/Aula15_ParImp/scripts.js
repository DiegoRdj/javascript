//Receber uma quantidade de valores
// funcso exibe se cada valar é par ou impar

//EU

exibirTipo(10)
function exibirTipo(limite){
    for (let i = 0; i <= limite; i++) {
        let parouimp = i % 2 
        if (parouimp == 0){
            console.log(i + " PAR!!!")
        } if(parouimp != 0){
        console.log( i + " IMPAR!! ")
        }
    }
}

// Forma q o mano fez ->

// function exibirTipo(limite) {
//     for (i = 0; i <= limite; i++){
//         if (i % 2 === 0){
//             console.log(i +" PAR")
//         } else {
//             console.log(i + " IMPAR")
//         }
//     }
// }