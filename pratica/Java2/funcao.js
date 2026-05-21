let p = document.getElementById("texto")
let p1 = document.getElementById("texto1")
let imgF = document.getElementById("imgF")
let aberto = false;

function apertoubtn(){

    if (aberto == false) {

        p.style.display = "block";
        p1.style.display = "block";
    
    p.style.position = 'absolute';
    p.style.left = '1362px';
    p.style.bottom = "400px"
    p.style.width = "350px"
    p.style.background = "#4F5A6E"
    p.style.borderRadius =  "50px 50px 50px 50px";
    p.style.color = "#ffffffd5"
    p.innerHTML =  
    `
        <p style = "display: inline; color: #ffffffd5; font-size:1.4em;"> S H A R E </p>
        <img id="imgF" src="article-preview-component-master/article-preview-component-master/images/icon-facebook.svg" style="padding: 0px 5px; height: 29px; " >
        <img id="imgF" src="article-preview-component-master/article-preview-component-master/images/icon-pinterest.svg" style="padding: 0px 5px; height: 30px; " >
        <img id="imgF" src="article-preview-component-master/article-preview-component-master/images/icon-twitter.svg" style="padding: 0px 5px; height: 30px; " >
`
    p.style.padding = "30px"

    p1.style.position = 'absolute';
    p1.style.left = '1530px';
    p1.style.bottom = "360px"
    p1.style.width = "10px"
    p1.style.background = "#4F5A6E"
    p1.style.borderLeft=  "10px solid transparent";
    p1.style.borderRight =  "10px solid transparent";
    p1.style.borderTop =  "0px solid #4b5670";
    p1.style.borderRadius =  "50px 50px 50px 50px";
    
     aberto = true;
     
} else {
    p.style.display = "none";
    p1.style.display = "none";

    aberto = false;
}
    
}
