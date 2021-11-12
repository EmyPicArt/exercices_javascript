
//1ere methode : créer une var button puis créer un bloc fonction et préciser au clic.

// Créer une variable pour le boutton en ciblant l'id du boutton
var button = document.getElementById('button');

// Créer un événement au clic du boutton par :[id du boutton]. Méthode pour créer un évènement = [addEventListener]('clic', function [donner un id à la fonction])
button.addEventListener('click', function getValue() {
   // Sélectionner le texte de chaque champ complété et récupérer sa valeur avec .value  (à mettre dans la fonction car on récupère la valeur lors du clic)
  var input1 = document.getElementById('lastName').value;
  var input2 = document.getElementById('firstName').value;
  var input3 = document.getElementById('city').value;
  // Afficher la valeur totale en indiquant chaque input
  alert('Nom : ' + input1 + '\nPrénom : ' + input2 + '\nVille : ' + input3);
});





// 2eme méthode : 1) créer une var pour le button / 2) créer une var "fonction" avec ce qui se passe lors de l'évènement = appeler les values et les afficher dans alerte / 3) faire un évènement au cilc en appelant la var fonction

var button = document.getElementById('button');

var recupValue = function() {
 var input1 = document.getElementById('lastName').value;
 var input2 = document.getElementById('firstName').value;
 var input3 = document.getElementById('city').value;
 alert('Nom : ' + input1 + '\nPrénom : ' + input2 + '\nVille : ' + input3);
};

button.addEventListener('click',recupValue); //= on appelle la variable button où on a stocké l'id du bouton. On lui rattache la méthode Add pour déclancher la fonction stockée dans la variable recupValue. L'évènement qui va déclancher cette fonction sera le click


// fonction fléchée
// () => {

// }
