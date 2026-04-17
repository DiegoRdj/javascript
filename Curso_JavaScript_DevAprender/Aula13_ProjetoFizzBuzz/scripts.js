//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel po3 3 e 5 => entrada
//Não divisivel por 3 ou 5 => entrada (aparece o numero selecionado)
// nao é um numero
const resultado = fizzBuzz(30)
console.log(resultado)

    function fizzBuzz(entrada) {
        if  (typeof entrada !== "number") {
            return "Não é um numero"
        }      
       else if (entrada % 3 === 0 && entrada % 5 === 0) {
            console.log("FizzBuzz")
        }  
        else if (entrada % 3 === 0) {
            console.log("Fizz")
        } 
         else if (entrada % 5 === 0) {
            console.log("Buzz")
        }
         else if (entrada % 3 !== 0 && entrada % 5 !== 0) {
            console.log(entrada)
        }
    }

    //JEITO DELE

    function fizzBuzz(entrada){
        if ( typeof entrada !== "number") {
            return "Não é um numero"
        }
        if (entrada % 3 === 0) {
            return "Fizz"
        } if (entrada % 5 === 0) {
            return "Buzz"
        }
        if (entrada % 3 === 0 && entrada % 5 === 0) {
            return "FizzBuzz"
        } 
        return entrada
    }