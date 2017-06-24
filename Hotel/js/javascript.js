$(document).ready(function() {
    valorQuartos();
    trocarFace();
})

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