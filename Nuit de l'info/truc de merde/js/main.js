/****************Le title qui change de nom****************/

let docTitle = document.title; window.addEventListener("blur", () => { document.title = "(ಠ_ಠ) Eh Revient !";
});
window.addEventListener("focus", () => { document.title = docTitle;
});

/*ahhahahahahhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/

document.addEventListener("mousemove", parallax);
function parallax(e){
  
  document.querySelectorAll(".cloud").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}