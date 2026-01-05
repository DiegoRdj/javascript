function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO')
        return
    }

    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''

    res.style.textAlign = 'center'
    res.innerHTML = ''

    function mostrarEsqueleto() {
        res.innerHTML = `
          <p>Detectamos ${genero} com ${idade} anos.</p>
          <div style="display:flex; justify-content:center;">
            <div class="tenor-gif-embed"
              data-postid="285383495768827336"
              data-share-method="host"
              data-aspect-ratio="1.1"
              data-width="200px">
            </div>
          </div>
        `

        var s = document.createElement('script')
        s.src = 'https://tenor.com/embed.js'
        s.async = true
        document.body.appendChild(s)
    }

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        genero = 'Homem'

        if (idade < 10) {
            img.src = 'bebe h.jpg'
        } else if (idade < 21) {
            img.src = 'jovem h.jpg'
        } else if (idade < 50) {
            img.src = 'homem.jpg'
        } else if (idade < 110) {
            img.src = 'idoso.jpg'
        } else {
            mostrarEsqueleto()
            return
        }

    } else {
        genero = 'Mulher'

        if (idade < 10) {
            img.src = 'bebe m.jpg'
        } else if (idade < 21) {
            img.src = 'jovem m.jpg'
        } else if (idade < 50) {
            img.src = 'mulher.jpg'
        } else if (idade < 110) {
            img.src = 'idosa.jpg'
        } else {
            mostrarEsqueleto()
            return
        }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
