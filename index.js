var randomNumber1=Math.ceil(Math.random()*6);
var randomImage1="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);
var randomNumber2=Math.ceil(Math.random()*6);
var randomImage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player 1 Won";

}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").textContent="Player 2 Won";
}
else{
  document.querySelector("h1").textContent="Draw";
}
