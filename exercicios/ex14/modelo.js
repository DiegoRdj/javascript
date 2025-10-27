function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!`
if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = 
 'pexels-torsten-kellermann-349167-955656.jpg'
document.body.style.backgroundColor = '#9CD6FA'
document.body.style.color = '#9CD6FA'
} else if (hora >= 12 && hora <18) {
    //BOA TARDE
    img.src = 'pexels-anderson-martinsz-2386144.jpg'
    document.body.style.backgroundColor = '#FF9728'
    document.body.style.color = '#FF9728'

} else {
    //BOA NOITE
    img.src = 'pexels-pixabay-355465.jpg'
    document.body.style.backgroundColor = '#00459D'
    document.body.style.color = '#00459D'
}
}