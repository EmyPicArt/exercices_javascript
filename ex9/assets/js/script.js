// agrandir une image au clic 1) créer une var width/height = _.clientWidth/Height = 2) _.style.width/height = (width + nb + "px")

img.addEventListener ('click', function(){
  var img = document.getElementById('img');
  var width = img.clientWidth;
  var height = img.clientHeight;
  img.style.width = (width +500) + "px";
  img.style.height = (height + 500) + "px";
})