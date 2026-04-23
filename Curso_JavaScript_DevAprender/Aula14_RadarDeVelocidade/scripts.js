//Velocidade maxima de 70km
// a cada 5km acima do limite, vc ganha 1 ponto na carteira
//Math.floar
//Caso os pontos sejam maior q 12
verificaVelocidade(81);
    
function verificaVelocidade(Velocidade){
   
    const VelocidadeMaxima = 70
    const kmPorPonto = 5 
    let pontos = Math.floor((Velocidade - VelocidadeMaxima) / kmPorPonto)
   if (Velocidade <= 70) {
        console.log("Ok!")
    } else if (Velocidade > VelocidadeMaxima && Velocidade <= 75){
        console.log(pontos + " ponto")
    } else if (Velocidade > 75 && pontos <=12) {
        console.log(pontos + " pontos")
    } else if (pontos => 13){
        console.log("Carteira Suspendida")
    }
        
}