// Author: Shelley Wong
function question1(){
  var answerSubmitted = document.getElementById("userAnswer").value;
  var correctAnswer = 130;
  //check if submission is NOT a number; if NaN,tell user to try again
  var notANum = isNaN(answerSubmitted);
  if(correctAnswer == answerSubmitted)
  {
    document.getElementById("output").innerHTML = "Correct!";
  }
  else if(notANum)
  {
    document.getElementById("output").innerHTML = "The answer must be a number; please try again!"
  }
  else
  {
    document.getElementById("output").innerHTML = "Incorrect; please try again!";
  }
}

function question2(){

}

function question3(){

}

function newPage(){
  window.location.href="question2.html";
}
