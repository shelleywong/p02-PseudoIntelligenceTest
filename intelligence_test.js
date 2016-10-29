// Author: Shelley Wong
//global variable to count number of correct answers
var totalCorrect = 0;
var pageCorrect = 0;

function question1(){
  var answerSubmitted = document.getElementById("userAnswer").value;
  var correctAnswer = 130;
  pageCorrect = 0;
  //check that submission is a number; if NaN,tell user to try again
  var notANum = isNaN(answerSubmitted);
  if(correctAnswer == answerSubmitted)
  {
    document.getElementById("output").innerHTML = "Correct!";
    pageCorrect++;
  }
  else if(notANum)
  {
    document.getElementById("output").innerHTML = "The answer must be a number;"
      + " please try again!"
  }
  else
  {
    document.getElementById("output").innerHTML = "The answer is a different"
      + " number; please try again!";
  }
  //setCookie("points",pageCorrect,1);
  //getCookie("points");
  console.log("points: ", pageCorrect);
}

function question2(){
  var answerSubmitted = document.getElementById("userAnswer").value;
  var correctAnswer = "word";
  pageCorrect = 0;
  //check if submission is not a number; if it is a number, user must try again
  var notANum = isNaN(answerSubmitted);
  if(correctAnswer == answerSubmitted)
  {
    document.getElementById("output").innerHTML = "Correct!";
    pageCorrect++;
  }
  else if(!notANum)
  {
    document.getElementById("output").innerHTML = "The answer must be a string"
    + " of alphabetic characters; please try again!";
  }
  else
  {
    document.getElementById("output").innerHTML = "The answer is a different"
    + " string of characters; please try again!";
  }
  //setCookie("points",pageCorrect,1);
  //getCookie("points");
  console.log("points: ", pageCorrect);
}

function question3(){
  var answerSubmitted = document.getElementById("userAnswer").value;
  var correctAnswer = 42;
  pageCorrect = 0;
  //check that submission is a number; if NaN, tell user to try again
  var notANum = isNaN(answerSubmitted);
  if(correctAnswer == answerSubmitted)
  {
    document.getElementById("output").innerHTML = "Correct!";
    pageCorrect++;
  }
  else if(notANum)
  {
    document.getElementById("output").innerHTML = "The answer must be a number;"
      + " please try again!"
  }
  else
  {
    document.getElementById("output").innerHTML = "The answer is a different"
      + " number; please try again!";
  }
  //setCookie("points",pageCorrect,1);
  //getCookie("points");
  console.log("points: ", pageCorrect);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname,cvalue,expdate){
  var d = new Date();
  d.setTime(d.getTime() + (expdate*24*60*60*1000));
  var expires = "expires= " + d.toUTCString();
  document.cookie= cname + "=" + cvalue + ";" + expires + ";path=/";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname){
  var name = cname + "=";
  var c_array = document.cookie.split(';');
  for(var i = 0; i < c_array.length; i++)
  {
    var c = c_array[i];
    while(c.charAt(0) == ' ')
    {
      c = c.substring(1);
    }
    if(c.indexOf(name) == 0)
    {
      return c.substring(name.length,c.length);
    }
  }
  return "";
}

function checkCookie(){
  var score=getCookie("points");
  var percent = score/3*100;
  percent = percent.toFixed(0);
  alert("You scored " + score + " out of 3 points: " + percent + "%");
}

function newPage(){
  if(pageCorrect > 0){
    totalCorrect++;
  }
  setCookie("points",totalCorrect,1);
  window.location.href="page2.html";
}

function nextNewPage(){
  if(pageCorrect > 0){
    totalCorrect++;
  }
  setCookie("points",totalCorrect,1);
  window.location.href="page3.html";
}

function resultsPage(){
  if(pageCorrect > 0){
    totalCorrect++;
  }
  setCookie("points",totalCorrect,1);
  window.location.href="results.html";
}
