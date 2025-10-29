function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 10) {
            //crianca
            img.setAttribute('src', 'bebe h.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem h.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'homem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.jpg')
        }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
         if (idade >=0 && idade < 10) {
            //crianca
            img.setAttribute('src', 'bebe m.jpg')

        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem m.jpg')

        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher.jpg')

        } else {
            //idoso
            img.setAttribute('src', 'idosa.jpg')

        }
       }

        img.style.width = '250px'
        img.style.height = '250px'
        img.style.objectFit = 'cover' // corta o excesso sem distorcer
        img.style.borderRadius = '50%'
        img.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)'
        img.style.display = 'block'
        img.style.margin = '10px auto' // centraliza bonitinho


       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}