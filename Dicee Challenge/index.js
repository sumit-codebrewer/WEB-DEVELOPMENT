var randomNumber=Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage="dice"+randomNumber+".png"; //dice1.png - dice6.png

var randomImageSource="images/"+randomDiceImage; //images/dice1.png - images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomNumber>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player1 Wins";
}
else if(randomNumber2>randomNumber){
  document.querySelector("h1").innerHTML="Player2 Wins🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
