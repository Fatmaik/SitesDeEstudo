window.onload = function() {
   valorQuartos();
<<<<<<< HEAD
   Face();
   Insta();
   Twitter();

=======
>>>>>>> 5abf8139ee6e55d4d8aef4994d749992cd64d90a
}
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
<<<<<<< HEAD
    }  
}

function Face(){
    var face = document.getElementById("face");

    face.onmouseover = function(){
        this.innerHTML = '<img src="css/imagens/LogoFacebook/FaceAmarelo.png">';
    }

    face.onmouseleave = function(){
        this.innerHTML = '<img src="css/imagens/LogoFacebook/FaceBranco.png">';
    }
}

function Insta(){
    var insta = document.getElementById("insta");
    
    insta.onmouseover = function(){
        this.innerHTML = '<img src="css/imagens/LogoInsta/InstaAmarelo.png">';
    }

    insta.onmouseleave = function(){
        this.innerHTML = '<img src="css/imagens/LogoInsta/InstaBranco.png">';
    }
=======
        document.getElementById("precoSolteiro").removeAttribute("class", "classAnimationSolteiro");
    } 
>>>>>>> 5abf8139ee6e55d4d8aef4994d749992cd64d90a
}

function Twitter(){
    var twitter = document.getElementById("twitter");
    
    twitter.onmouseover = function(){
        this.innerHTML = '<img src="css/imagens/LogoTwitter/TwitterAmarelo.png">';
    }

    twitter.onmouseleave = function(){
        this.innerHTML = '<img src="css/imagens/LogoTwitter/TwitterBranco.png">';
    }
}
