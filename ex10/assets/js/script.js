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



// voir le innerHTML 
// password.style.border = "3px outset red";
// password.style.border = "3px outset green";

// pour afficher un console log(cibler la var), le placer après la récupération de la var value



// Méthode 2
var truePassword = "0000";
var empty = document.getElementById("empty");

password .addEventListener ("keyup", function(){
  var valuePassword = document.getElementById("password").value;
  if(valuePassword === truePassword){
    password.style.border = "3px outset green";
    empty.innerHTML = '<div id="success" class="alert alert-success"><p>Good !</p></div>';
  }else{
    password.style.border ="3px outset red";
    empty.innerHTML = '<div id="danger" class="alert alert-danger"><p>No good !><p></div>';
  }
})
