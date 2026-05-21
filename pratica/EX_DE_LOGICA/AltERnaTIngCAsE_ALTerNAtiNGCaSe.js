String.prototype.toAlternatingCase = function () {
  
  let resultado = ""

  for (let i = 0; i < this.length; i++) {
    
    if(this[i] === this[i].toUpperCase()){
        resultado += this[i].toLowerCase()
    } else{
        resultado += this[i].toUpperCase()
    }
  }
    return resultado
}
console.log("hello world".toAlternatingCase())