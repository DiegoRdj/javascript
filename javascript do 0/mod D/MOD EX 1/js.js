function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 13
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //BOM DIa
    img.src  = 'pexels-torsten-kellermann-349167-955656.jpg'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = 'pexels-anderson-martinsz-2386144.jpg'
    document.body.style.background = '#FF9728'
    document.body.style.color = '#FF9728'
} else {
    //boa noite
    img.src = 'pexels-pixabay-355465.jpg'
    document.body.style.background = '#00459D'
    document.body.style.color = '#00459D'
}
}