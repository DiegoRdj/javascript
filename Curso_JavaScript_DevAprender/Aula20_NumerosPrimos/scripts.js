// Criar função para mostrar numeros primos

// Primos[
// Compostoss

//Ex: 10, 11

exbirNumerosPrimos(15);

function exbirNumerosPrimos(limite){
    
    for (let numero = 2; numero <= limite; numero++){
       
        
           if (verificarPrimo(numero)) console.log(numero)   
    }
    
}
function verificarPrimo(numero){
     for (let division = 2; division < numero; division++){
            if (numero % division === 0) {
                return false
            }   
            
        }
 return true
}
