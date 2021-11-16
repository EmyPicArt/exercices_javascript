// ex 1

// var lastName = 'PICART';
// alert(lastName)

// // ex 2

// var lastName = 'Doe';
// var firstName = 'John';
// var city = 'New-York';
// alert('Nom : ' + lastName  + '\nPrénom : ' + firstName + '\nVille : ' + city);

// // ex 3

// //boite de dialogue prompt pour remplir le prénom
// var firstName = prompt('Prénom :');
// // créer une var correspondant au prompt pour pouvoir l'afficher dans l'alerte
// alert('Bonjour, ' + firstName)

// ex 4

// // Créer une variable pour le boutton en ciblant l'id du boutton
// var button = document.getElementById('button')

// // Créer un événement au clic du boutton par :[id du boutton].[addEventListener]('clic', function [donner un id à la fonction])
// button.addEventListener('click',function getValue() {
//   // Sélectionner le texte de chaque champ complété et récupérer sa valeur avec .value
//   var input1 = document.getElementById('lastName').value;
//   var input2 = document.getElementById('firstName').value;
//   var input3 = document.getElementById('city').value;

//   // Afficher la valeur totale en indiquant chaque input
//   alert('Nom : ' + input1 + '\nPrénom : ' + input2 + '\nVille : ' + input3);
// });


// ex 5

// var button= document.getElementById('button')

// button.addEventListener('click', function getValue(){
//   var cookies = document.getElementById('cookies').value;
//   var invited = document.getElementById('invited').value;
//   alert('Il va falloir se battre il ne reste que :' + cookies % invited +' cookie(s) !!!');
// });

// ex 6
// var button= document.getElementById('button');
// var feet = document.getElementById('feet');
// var year = document.getElementById('year');

// button.addEventListener('click', function getValue(){
//   var feet = document.getElementById('feet').value;
//   var year = document.getElementById('year').value;
//   alert('Voici le résultat de ce magnifique calcul x2 : ' + (feet*2) + '\nsi j y ajoute 5 : ' + (feet*2 + 5) + '\nsi je multiplie par 50 ce pied de Géant : ' + (feet*2 + 5)*50) + '\nj enleve l annee de naissance : ' + (feet*2+5)*50 - year;
// });

// ex 7
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
// var btn = document.getElementById('button');

// btn.addEventListener('click', function(){
//     var age = document.getElementById('age').value;
    
//     1ère méthode
//     if(age >= 18 && age <= 120){ (= si age supérieur ou égal à 18 ET age inférieur ou égal à 120)
//         alert('Vous êtes majeur !');
//     } else if(age > 0 && age < 18) { (=SINON et on ajoute une condition : age compris entre 0 et 18)
//         alert('Vous êtes mineur !')
//     } else {(=SINON message d'erreur car entrée incorrecte)
//         alert('Arrête tes conneries !');
//     }



// //     //2ème méthode : meilleure car pose une une 1ere condition générale qui si elle n'est pas respectée affiche une erreur
//     if(age > 0 && age <= 120){ 
//       // (=vérifie que l'age est entre 0 et 120 / évite age négatif ou + de 121)
//         if(age >= 18 && age <= 120){
//             alert('Vous êtes majeur !');
//         } else {
//             alert('Vous êtes mineur !');
//         }
//     } else {
//         alert('Arrête tes conneries !');
//     }
// })

// ex 8
// // Evenement lors du passage de la souris : addEventListener + mouseenter et quand la souris quitte : mouseout
// img1.addEventListener('mouseenter', function(){
//   var img1 = document.getElementById('img1').src="assets/img/cygne.jpg";
// });
// img1.addEventListener('mouseout', function(){
//   var img1 = document.getElementById('img1').src="assets/img/stitch.jpg";
// });
// mouseover : fonctionne comme mouseenter mais touche les éléments enfants aussi (ex: les elmts enfants d'une div, l'evt est décanché peut importe où on survole la div)


// // ex 9

// Créer en 1er une var ciblant l'image elle même 
// Créer une var ciblant la taille initiale fixe sans modif au click
// var img = document.getElementById('img');
// var initialImg = img.clientWidth;

// // créer une fonction ciblant l'img au click
// img.addEventListener ('click', function(){
//   // créer une nouvelle var pour récupérer une nouvelle fois la taille mais qui se modifira au click
//   var widthImg = img.clientWidth;
// // Condition si la taille modifiée est sup à 500 px alors on revient à la taille initiale par un style css : var taille initiale + "px"
// // sinon dans les autres conditions on agrandit l'img de 50 px à chaque click par du CSS : var taille modifiable + 50 px
//   if(widthImg > 500){
//     img.style.width = initialImg +"px";
//   } else {
//     img.style.width = (widthImg +50) + "px";
//   }
// })

// // autre méthode utiliser :
// // id.style.transform ="scale(1.5)";


// // ex 10
// // créer une var pour cibler l'input ( afin de déclencher une fonction par rapport à cet élément par la suite)
// var password = document.getElementById('password');

// // créer un événement déclanché en fonction de l'input : "keyup" pour frappe sur le clavier
// // récuper à l'intérieur de la fonction la value de l'input
// // créer une variable avec un string de l'input correct
// // récuperer les div à afficher / masquer
// password.addEventListener ("keyup", function(){
//   var valuePassword = document.getElementById('password').value;
//   var truePassword = '0000';
//   var sucess = document.getElementById('success');
//   var danger = document.getElementById('danger');
//   // condition si input  strictement égal (===) au string alors Div à green masquer/afficher red
//   if (valuePassword == truePassword){  
//     sucess.style.display = "block";
//     danger.style.display = "none";
//     password.style.border = "3px outset green";
//     // sinon tous les autres cas masquer green/ afficher red 
//   } else {
//     sucess.style.display = "none";
//     danger.style.display = "block";
//     password.style.border = "3px outset red";
//   }
// });


// // pour afficher un console log(cibler la var), le placer après la récupération de la var value



// // Méthode 2
// var truePassword = "0000";
// var empty = document.getElementById("empty");

// password .addEventListener ("keyup", function(){
//   var valuePassword = document.getElementById("password").value;
//   if(valuePassword === truePassword){
//     password.style.border = "3px outset green";
//     empty.innerHTML = '<div id="success" class="alert alert-success"><p>Good !</p></div>';
//   }else{
//     password.style.border ="3px outset red";
//     empty.innerHTML = '<div id="danger" class="alert alert-danger"><p>No good !><p></div>';
//   }
// })