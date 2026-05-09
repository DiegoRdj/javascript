// Nota escolar
// Obter a media a partir de um array

// 0-59
// 60 - 69
// 70 - 79
// 80 - 89
// 90 - 100

//Minha versão

const array = [100, 100, 100]

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    let soma = array[0] + array[1] + array[2];
    let media = Math.floor(soma / 3)
    if (media <= 59) {
        console.log("F")
    } else if(media >= 60 && media <= 69) {
        console.log("D")
    } else if(media >= 70 && media <= 79) {
        console.log("C")
    }else if(media >= 80 && media <= 89) {
        console.log("B")
    }else if(media >= 90 && media <= 99) {
        console.log("A")
    }else if(media >= 100) {
        console.log("S")
    }

}

//Versão dele -->

function mediaDoAluno(notas){

    const media = calcularMedia(notas); 

    if (media < 59) return "F";
    if (media < 69) return "D";
    if (media < 79) return "C";
    if (media < 89) return "B";
    return "A";
}
function calcularMedia(array) {
     const soma = 0;
    for (let valor of array){
        soma += valor;
    }
return soma / (array.length)
}