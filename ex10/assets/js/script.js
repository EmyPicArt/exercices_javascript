console.log()
var password = document.getElementById('password').value;
var truePassword = '0000';
var userName = document.getElementById('userName').value;
var sucess = document.getElementById('alert-sucess');
var danger = document.getElementById('alert-danger');

userName.addEventListener("keyup", function(){
  if ('password' === 'truePassword'){
    password.style.backgroundColor = green;
    empty.innerHTML ='<div id="liveAlertPlaceholder" class="alert alert-success">Good !</div>';
  } else {
    password.style.backgroundColor = red;
    empty.innerHTML = '<div id="liveAlertPlaceholder" class="alert alert-danger">No good !</div>';
  }
});
// voir le bg color et le innerhtml
