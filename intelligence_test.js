// Author: Shelley Wong
function question1(){
  var answerSubmitted = document.getElementById("userAnswer").value;
  var correctAnswer = 130;
  //check that submission is a number; if NaN,tell user to try again
  var notANum = isNaN(answerSubmitted);
  if(correctAnswer == answerSubmitted)
  {
    document.getElementById("output").innerHTML = "Correct!";
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
  //check if submission is not a number; if it is a number, user must try again
  var notANum = isNaN(answerSubmitted);
  if(correctAnswer == answerSubmitted)
  {
    document.getElementById("output").innerHTML = "Correct!";
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
  //check that submission is a number; if NaN, tell user to try again
  var notANum = isNaN(answerSubmitted);
  if(correctAnswer == answerSubmitted)
  {
    document.getElementById("output").innerHTML = "Correct!";
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

function newPage(){
  window.location.href="page2.html";
}

function nextNewPage(){
  window.location.href="page3.html";
}

function resultsPage(){
  window.location.href="results.html";
}
