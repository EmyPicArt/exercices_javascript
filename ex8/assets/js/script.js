// Evenement lors du passage de la souris : addEventListener + mouseenter et quand la souris quitte : mouseout
img1.addEventListener('mouseenter', function(){
  var img1 = document.getElementById('img1').src="assets/img/cygne.jpg";
});
img1.addEventListener('mouseout', function(){
  var img1 = document.getElementById('img1').src="assets/img/stitch.jpg";
});

