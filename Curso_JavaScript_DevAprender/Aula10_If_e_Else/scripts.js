//if... Else

//Se a hora estiver entre 6:000 até as 12:00: bom dia!
// Se for 12:00 ate 18:00 : boa tarde
//Se não, boa noite

let hora = 20


if (hora >= 6 && hora < 12) {
    console.log("Bom Dia")
} else if (hora >= 12 && hora < 18){
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}