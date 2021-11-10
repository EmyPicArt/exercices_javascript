// Créer une variable pour le boutton en ciblant l'id du boutton
var button = document.getElementById('button')

// Créer un événement au clic du boutton par :[id du boutton].[addEventListener]('clic', function [donner un id à la fonction])
button.addEventListener('click',function getValue() {
  // Sélectionner le texte de chaque champ complété et récupérer sa valeur avec .value
  var input1 = document.getElementById('lastName').value;
  var input2 = document.getElementById('firstName').value;
  var input3 = document.getElementById('city').value;

  // Afficher la valeur totale en indiquant chaque input
  alert('Nom : ' + input1 + '\nPrénom : ' + input2 + '\nVille : ' + input3);
});


