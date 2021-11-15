// Ma méthode :
// var button = document.getElementById('button');


// var recupValue = function(){
//   var age = document.getElementById('age').value;
//   if(age >= 18){ //supérieur ou égal à 18
//       alert('vous êtes majeur')
//   } else {
//     alert('vous êtes mineur')
//   }
// }

// button.addEventListener('click', recupValue);

// correction :
var btn = document.getElementById('button');

btn.addEventListener('click', function(){
    var age = document.getElementById('age').value;
    
//     //1ère méthode
//     // if(age >= 18 && age <= 120){ (= si age supérieur ou égal à 18 ET age inférieur ou égal à 120)
//     //     alert('Vous êtes majeur !');
//     // } else if(age > 0 && age < 18) { (=SINON et on ajoute une condition : age compris entre 0 et 18)
//     //     alert('Vous êtes mineur !')
//     // } else {(=SINON message d'erreur car entrée incorrecte)
//     //     alert('Arrête tes conneries !');
//     // }



//     //2ème méthode : meilleure car pose une une 1ere condition générale qui si elle n'est pas respectée affiche une erreur
    if(age > 0 && age <= 120){ 
      // (=vérifie que l'age est entre 0 et 120 / évite age négatif ou + de 121)
        if(age >= 18 && age <= 120){
            alert('Vous êtes majeur !');
        } else {
            alert('Vous êtes mineur !');
        }
    } else {
        alert('Arrête tes conneries !');
    }
})
