var button= document.getElementById('button')

button.addEventListener('click', function getValue(){
  var cookies = document.getElementById('cookies').value;
  var invited = document.getElementById('invited').value;
  alert('Il va falloir se battre il ne reste que :' + cookies % invited +' cookie(s) !!!');
});


