$(document).ready(function() {
    valorQuartos();
    setInterval("fotoHome()", 1000);
    
   
    custoTotal();
    

});

// funcao de apresentacao de preços de quartos (solteiro/casal)
function valorQuartos() {
    var casal = document.getElementById("casal");
    var solteiro = document.getElementById("solteiro");

    casal.onmouseover = function() {
        this.setAttribute("class", "classShadow");
        document.getElementById("precoCasal").style.visibility = "visible";
        document.getElementById("precoCasal").setAttribute("class", "classAnimationCasado");
    }

    casal.onmouseleave = function() {
        this.removeAttribute("class");
        document.getElementById("precoCasal").style.visibility = "hidden";
        document.getElementById("precoCasal").removeAttribute("class", "classAnimationCasado");
    }

    solteiro.onmouseover = function() {
        this.setAttribute("class", "classShadow");
        document.getElementById("precoSolteiro").style.visibility = "visible";
        document.getElementById("precoSolteiro").setAttribute("class", "classAnimationSolteiro");
    }

    solteiro.onmouseleave = function() {
        this.removeAttribute("class", "classShadow");
        document.getElementById("precoSolteiro").style.visibility = "hidden";
        document.getElementById("precoSolteiro").removeAttribute("class", "classAnimationSolteiro");
    } 
}

// funcao de alteracao de imagens de apresentacao do site
function fotoHome() {
    var date = new Date();
    
    if(date.getSeconds() < 10) {
        var img = $("#imgHeader");
        img.attr({
            src: "css/imagens/Hotel/hotel1.jpg",
            alt: "hotel 1"
        })
             
    }else if(date.getSeconds() >= 10 && date.getSeconds() < 20) {
        var img = $("#imgHeader");
        img.attr({
            src: "css/imagens/Hotel/hotel2.jpg",
            alt: "hotel 2"
        })
    }else if(date.getSeconds() >= 20 && date.getSeconds() < 30) {
        var img = $("#imgHeader");
        img.attr({
            src: "css/imagens/Hotel/hotel3.jpg",
            alt: "hotel 3"
        })
    }else if(date.getSeconds() >= 30 && date.getSeconds() < 40) {
        var img = $("#imgHeader");
        img.attr({
            src: "css/imagens/Hotel/hotel1.jpg",
            alt: "hotel 1"
        })
             
    }else if(date.getSeconds() >= 40 && date.getSeconds() < 50) {
        var img = $("#imgHeader");
        img.attr({
            src: "css/imagens/Hotel/hotel2.jpg",
            alt: "hotel 2"
        })
    }else if(date.getSeconds() >= 51 && date.getSeconds() < 60) {
        var img = $("#imgHeader");
        img.attr({
            src: "css/imagens/Hotel/hotel3.jpg",
            alt: "hotel 3"
        })
    }
}


