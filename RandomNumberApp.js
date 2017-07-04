//var randomNum will set the value of the random number
var randomNum= Math.round(10*Math.random());

//logs the random generated number to the console, to be checked on clickMe() function
function createNumber(){
  console.log(randomNum);
}


function clickMe(){
  var x = document.getElementById('input').value;
  if (x > 10 || x < 0){
    alert('Your phone now has a virus. Try again stupid');
  }
  else if(x == randomNum){
  document.getElementById('guess').innerHTML = "You win!<img src='http://media3.giphy.com/media/YC6ZedMDgR1Fm/giphy.gif' style='height:200px'>";
    var y = document.getElementById('tryagain').innerHTML = "Play again";
  } else{
  document.getElementById('guess').innerHTML = "Don't be a Toby...<img src='http://38.media.tumblr.com/9eb3b221d713dd539e14459a2854fc8d/tumblr_n7o74nylkS1qiiroso1_500.gif' style='height:200px'>";
  }
}

function changeBack(){
  var x = document.getElementById('input').value;
  
  if (x == randomNum){
  document.getElementById('tryagain').innerHTML = 'Click me to try again';
  location.reload(true);
   } else{
  document.getElementById('input').value = ' ';
  document.getElementById('guess').innerHTML = ' ';
   } 
}