const question = document.getElementById("question");
const message = document.getElementById("message");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const letsPlay = document.getElementById("letsPlay");

//
opt1.style.display = "none";
opt2.style.display = "none";
opt3.style.display = "none";
opt4.style.display = "none";

//
function playGame() {
  letsPlay.style.pointerEvents = "none";
  //
  opt1.style.display = "block";
  opt2.style.display = "block";
  opt3.style.display = "block";
  opt4.style.display = "block";

  //
  let randomNum = Math.floor(Math.random() * 4);
  let firstOperand = Math.floor(Math.random() * 9000) + 1000;
  let secondOperand = Math.floor(Math.random() * 9000) + 1000;

  //
  let temp;
  if (secondOperand > firstOperand) {
    temp = firstOperand;
    firstOperand = secondOperand;
    secondOperand = temp;
  }

  const questionOptions = ["sum", "difference", "product", "quotient"];
  const questionTOAsk = `What is ${questionOptions[randomNum]} of ${firstOperand} and ${secondOperand}. `;
  question.innerHTML = questionTOAsk;
  message.innerHTML = "Choose correct answer..";

  //
  let correctAnswer;
  if (randomNum == 0) {
    correctAnswer = firstOperand + secondOperand;
  } else if (randomNum == 1) {
    correctAnswer = firstOperand - secondOperand;
  } else if (randomNum == 2) {
    correctAnswer = firstOperand * secondOperand;
  } else {
    correctAnswer = firstOperand / secondOperand;
  }
  // correctAnswer = parseInt(correctAnswer.toFixed(2));

  //
  const answerOption = [opt1, opt2, opt3, opt4];

  answerOption[randomNum].innerHTML = correctAnswer;

  if (randomNum == 0) {
    opt2.innerHTML = correctAnswer + 3;
    opt3.innerHTML = correctAnswer - 3;
    opt4.innerHTML = correctAnswer + 7;
  } else if (randomNum == 1) {
    opt1.innerHTML = correctAnswer + 3;
    opt3.innerHTML = correctAnswer - 3;
    opt4.innerHTML = correctAnswer + 7;
  } else if (randomNum == 2) {
    opt1.innerHTML = correctAnswer + 3;
    opt2.innerHTML = correctAnswer - 3;
    opt4.innerHTML = correctAnswer + 7;
  } else {
    opt1.innerHTML = correctAnswer + 3;
    opt2.innerHTML = correctAnswer - 3;
    opt3.innerHTML = correctAnswer + 7;
  }

  //
  answerOption.forEach((element) => {
    element.addEventListener("click", function () {
      if (element.innerHTML == correctAnswer) {
        question.innerHTML = "Awesome.... ";
        message.innerHTML = "go for next";

        //
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
        letsPlay.style.pointerEvents = "auto";
      } else {
        message.innerHTML = `Opps....wrong answer. Better luck next time.</br> </br>
        The right answer is ${correctAnswer} 
        `;
        letsPlay.style.pointerEvents = "auto";

        //
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
      }
    });
  });

  //
}

//
letsPlay.addEventListener("click", function () {
  playGame();
});
