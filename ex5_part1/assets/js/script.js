var button= document.getElementById('button')

button.addEventListener('click', function getValue(){
  var cookies = document.getElementById('cookies').value;
  var invited = document.getElementById('invited').value;
  alert('Il va falloir se battre il ne reste que :' + cookies % invited +' cookie(s) !!!');
});

//Methode avec arguments

// function modulo(toto, tata){
//   return toto % tata
// }

// alert(modulo (10, 3));

// //Methode sans arguments

// document.getElementById('button').addEventListener('click', function modulo(){
//   alert('Reste de la division : ' + document.getElementById('firstNumber').value % document.getElementById('secondNumber').value)
// })


