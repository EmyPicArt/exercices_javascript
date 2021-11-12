//commentaire
console.log()
var button = document.getElementById('button');


var recupValue = function(){
  var age = document.getElementById('age').value;
  if(age >= 18){ //supérieur ou égal à 18
      alert('vous êtes majeur')
  } else {
    alert('vous êtes mineur')
  }
}

button.addEventListener('click', recupValue);
