// Criar função somar que retorna a 
// soma de todos os multiplos de 3 e 5

// Multiplos de 3
// 3, 6, 9
// Multiplos de 5
// 5, 10

// Somando os multiplos
// Armazenar os multiplos de 3 dps os de 5 e dps somar os 2

somar(10)
function somar(limite) {
    let num3 = 0;
    let num5 = 0;
    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0) 
          num3 += i; 
        if (i % 5 === 0) 
            num5 += i

      
    }
     console.log(num3 + num5)
}