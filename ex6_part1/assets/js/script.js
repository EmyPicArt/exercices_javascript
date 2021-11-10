var button= document.getElementById('button');
var feet = document.getElementById('feet');
var year = document.getElementById('year');

button.addEventListener('click', function getValue(){
  var feet = document.getElementById('feet').value;
  var year = document.getElementById('year').value;
  alert('Voici le résultat de ce magnifique calcul x2 : ' + (feet*2) + '\nsi j y ajoute 5 : ' + (feet*2 + 5) + '\nsi je multiplie par 50 ce pied de Géant : ' + (feet*2 + 5)*50) + '\nj enleve l annee de naissance : ' + (feet*2+5)*50 - year;
});

