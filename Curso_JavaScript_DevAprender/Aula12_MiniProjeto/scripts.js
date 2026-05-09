// Escreva uma funcao que usa 2 numeros e retorna o maior entre eles

function PERSONA (){
    let num1 = 80;
    let num2 = 40;
    if (num1 > num2) {
        console.log("O numero " + num1 + " É maior")
    } else {
        console.log("O numero " + num2 + " É maior")
    }    
}
PERSONA()

//JEITO DELE

let valorMaior = max(5,9);
console.log(valorMaior)

function max(numero1, numero2) {
        if (numero1 > numero2) {
            return numero1
        } else {
            return numero2
        }
}
