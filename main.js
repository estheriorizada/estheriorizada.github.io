/* Mostra e oculta o menu de navegação na versão mobile*/
function menuMobile() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 
  
  function mostraTexto(selected)  {
    if (selected == 'glitch') {
        apareceTexto = "Arquivos corrompidos, glitches e afins";
    } else if (selected == 'tresD') {
        apareceTexto = "Arte 3D";
    }

    document.getElementsByClassName('interesses').innerHTML = apareceTexto;
  }


  //document.getElementsByClassName("glitch")[0].innerHTML = "Arquivos corrompidos, glitches e afins";

/* Mostra e oculta card na sessão "Interesses"
function glitch() {
    var g = document.getElementById("card_glitch")
    if (g.style.display === "none") {
        g.style.display = "block";
    } else {
        g.style.display = "none";
    }
}

function tresD() {
    var t = document.getElementById("card_tresD")
    if (t.style.display === "none") {
        t.style.display = "block";
    } else {
        t.style.display = "none";
    }
}
*/