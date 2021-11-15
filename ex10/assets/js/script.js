console.log(password)

var userName = addEventListener ("keyup", function(){
  var password = document.getElementById('password').value;
  var truePassword = '0000';
  var sucess = document.getElementById('sucess');
  var danger = document.getElementById('danger');
  if ('password' == 'truePassword'){  
    sucess.style.display = "block";
    danger.style.display = "none";
  } else {
    sucess.style.display = "none";
    danger.style.display = "block";
  }
});
// voir le bg color et le innerhtml empty.innerHTML 
// password.style.backgroundColor = red;
// password.style.backgroundColor = green;
