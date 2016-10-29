// Author: Shelley Wong
var totalCorrect = 0; //global variable to count number of correct answers
var pageCorrect = 0; //reset to 0 for each page; only 1pt awarded per page

function question1(){
  var answerSubmitted = document.getElementById("userAnswer").value;
  var correctAnswer = 130;
  pageCorrect = 0;
  //set point total back to 0 every time user re-tries the test
  setCookie("points", 0);
  //check that submission is a number; if NaN,tell user to try again
  var notANum = isNaN(answerSubmitted);
  if(correctAnswer == answerSubmitted)
  {
    document.getElementById("output").innerHTML = "Correct!";
    pageCorrect = 1;
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
    pageCorrect = 1;
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
    pageCorrect = 1;
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
}
/*
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname,cvalue,expdate){
  var d = new Date();
  d.setTime(d.getTime() + (expdate*24*60*60*1000));
  var expires = "expires= " + d.toUTCString();
  document.cookie= cname + "=" + cvalue + ";" + expires + ";path=/";
}
*/

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
//without explicit date set, cookie expires when the browser is closed
function setCookie(cname,cvalue){
  document.cookie= cname + "=" + cvalue + ";path=/";
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
  totalCorrect=getCookie("points");
  var percent = totalCorrect/3*100;
  percent = percent.toFixed(0);
  alert("You scored " + totalCorrect + " out of 3 points: " + percent + "%");
}

/*
  when button for next page is clicked:
  (1) Get cookie and assign it to totalCorrect variable (converted from str to int)
  (2) If question is answered correctly for current page, add a point to totalCorrect
  (3) Set the value of totalCorrect as a cookie before clicking to next page
*/
function newPage(){
  totalCorrect = parseInt(getCookie("points"));
  if(pageCorrect > 0){
    totalCorrect += pageCorrect;
  }
  setCookie("points",totalCorrect);
  window.location.href="page2.html";
}

function nextNewPage(){
  totalCorrect = parseInt(getCookie("points"));
  if(pageCorrect > 0){
    totalCorrect += pageCorrect;
  }
  setCookie("points",totalCorrect);
  window.location.href="page3.html";
}

function resultsPage(){
  totalCorrect = parseInt(getCookie("points"));
  if(pageCorrect > 0){
    totalCorrect += pageCorrect;
  }
  setCookie("points",totalCorrect);
  window.location.href="results.html";
}
