window.onload = function() {
   valorQuartos();
//    document.getElementById("casal").onmouseout = retirarShadow();
}

function retirarShadow() {
    var casal = document.getElementById("casal")
    casal.onmouseover.style.boxShadow = "0px 0px 0px silver"; 
}

function valorQuartos() {
    var casal = document.getElementById("casal");
    casal.onmouseover = function() {
        this.setAttribute("class", "classShadow");
       
    }
     
}

