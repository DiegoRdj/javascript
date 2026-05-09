let texto1 = document.getElementById("texto1")
let texto2 = document.getElementById("texto2")
let texto3 = document.getElementById("texto3")
let texto4 = document.getElementById("texto4")
let img1 = document.getElementById("mudarImg1")
let img2 = document.getElementById("mudarImg2")
let img3 = document.getElementById("mudarImg3")
let img4 = document.getElementById("mudarImg4")
function botao1() {
     texto1.style.padding = "10px 40px"
    texto1.style.fontSize = "1.1em"
    texto1.style.color = "rgba(53, 53, 53, 0.705)"
    texto1.innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    img1.src = "faq-accordion-main/faq-accordion-main/assets/images/icon-minus.svg"
}
function botaoS1(){
    
   
    texto1.style.color = "rgba(53, 53, 53, 0.705)"
    texto1.innerHTML= ""
    img1.src = "faq-accordion-main/faq-accordion-main/assets/images/icon-plus.svg"
    
}
function botao2() {
     texto2.style.padding = "10px 40px"
    texto2.style.fontSize = "1.1em"
    texto2.style.color = "rgba(53, 53, 53, 0.705)"
    texto2.innerHTML = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    img2.src = "faq-accordion-main/faq-accordion-main/assets/images/icon-minus.svg"
}
function botaoS2(){

    texto2.style.color = "rgba(53, 53, 53, 0.705)"
    texto2.innerHTML= ""
    img2.src = "faq-accordion-main/faq-accordion-main/assets/images/icon-plus.svg"
}
function botao3() {
     texto3.style.padding = "10px 40px"
    texto3.style.fontSize = "1.1em"
    texto3.style.color = "rgba(53, 53, 53, 0.705)"
      texto3.innerHTML = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    img3.src = "faq-accordion-main/faq-accordion-main/assets/images/icon-minus.svg"
}
function botaoS3(){
    
  
    texto3.style.color = "rgba(53, 53, 53, 0.705)"
    texto3.innerHTML= ""
    img3.src = "faq-accordion-main/faq-accordion-main/assets/images/icon-plus.svg"
}
function botao4() {
     texto4.style.padding = "0px 40px 20px 40px"
    texto4.style.fontSize = "1.1em"
    texto4.style.color = "rgba(53, 53, 53, 0.705)"
     texto4.innerHTML = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    img4.src = "faq-accordion-main/faq-accordion-main/assets/images/icon-minus.svg"
}
function botaoS4(){
    
   
    texto4.style.color = "rgba(53, 53, 53, 0.705)"
    texto4.innerHTML= ""
    img4.src = "faq-accordion-main/faq-accordion-main/assets/images/icon-plus.svg"
    
}