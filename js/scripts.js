$(document).ready(function() {
  var age = parseInt(prompt("Enter your age:"));

  if(age >= 18){
    $('#over').show();
  } else {
    $('#under').show();
  }
});
