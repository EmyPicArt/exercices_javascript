// Créer en 1er une var ciblant l'image elle même 
// Créer une var ciblant la taille initiale fixe sans modif au click
var img = document.getElementById('img');
var initialImg = img.clientWidth;

// créer une fonction ciblant l'img au click
img.addEventListener ('click', function(){
  // créer une nouvelle var pour récupérer une nouvelle fois la taille mais qui se modifira au click
  var widthImg = img.clientWidth;
// Condition si la taille modifiée est sup à 500 px alors on revient à la taille initiale par un style css : var taille initiale + "px"
// sinon dans les autres conditions on agrandit l'img de 50 px à chaque click par du CSS : var taille modifiable + 50 px
  if(widthImg > 500){
    img.style.width = initialImg +"px";
  } else {
    img.style.width = (widthImg +50) + "px";
  }
})

// autre méthode utiliser :
// id.style.transform ="scale(1.5)";