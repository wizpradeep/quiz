function playGame() {
  const question = document.getElementById("question");
  const message = document.getElementById("message");
  const opt1 = document.getElementById("opt1");
  const opt2 = document.getElementById("opt2");
  const opt3 = document.getElementById("opt3");
  const opt4 = document.getElementById("opt4");
  const letsPlay = document.getElementById("letsPlay");

  opt1.style.display = "none";
  opt2.style.display = "none";
  opt3.style.display = "none";
  opt4.style.display = "none";

  letsPlay.addEventListener("click", function () {
    question.style.display = "block";
    message.innerHTML = "Choose Answer";

    let randomNum = Math.floor(Math.random() * 4);
    let firstOperand = Math.floor(Math.random() * 9000) + 1000;
    let secondOperand = Math.floor(Math.random() * 9000) + 1000;

    // 2    5

    if (secondOperand > firstOperand) {
      let temp = firstOperand;
      firstOperand = secondOperand;
      secondOperand = temp;

      let questionOption = ["sum", "difference", "product", "quotient"];
      let questionToAsk = `What is the ${questionOption[randomNum]} of ${firstOperand} and ${secondOperand} `;
      question.innerText = questionToAsk;
      let correctAns;
      if (question.innerText.includes("sum")) {
        correctAns = firstOperand + secondOperand;
      } else if (question.innerText.includes("difference")) {
        correctAns = firstOperand - secondOperand;
      } else if (question.innerText.includes("product")) {
        correctAns = firstOperand * secondOperand;
      } else if (question.innerText.includes("quotient")) {
        correctAns = firstOperand / secondOperand;
      }
      correctAns = parseInt(correctAns.toFixed(2));
      opt1.style.display = "block";
      opt2.style.display = "block";
      opt3.style.display = "block";
      opt4.style.display = "block";

      optArray = [opt1, opt2, opt3, opt4];

      optArray[randomNum].innerHTML = correctAns;

      const userAns = document.querySelectorAll(".ans");

      if (randomNum == 0) {
        opt2.innerHTML = correctAns - 5;
        opt3.innerHTML = correctAns + 78;
        opt4.innerHTML = correctAns - 36;
      } else if (randomNum == 1) {
        opt1.innerHTML = correctAns - 5;
        opt3.innerHTML = correctAns + 78;
        opt4.innerHTML = correctAns - 36;
      } else if (randomNum == 2) {
        opt2.innerHTML = correctAns - 5;
        opt1.innerHTML = correctAns + 78;
        opt4.innerHTML = correctAns - 36;
      } else if (randomNum == 3) {
        opt1.innerHTML = correctAns - 3;
        opt2.innerHTML = correctAns - 2;
        opt3.innerHTML = correctAns + 2;
      }
      userAns.forEach((element) => {
        element.addEventListener("click", function () {
          if (element.innerHTML.includes(correctAns)) {
            message.innerHTML = "Awesome.. </br>Click Next for Next Question";
            letsPlay.style.display = "block";
            question.style.display = "none";
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
          } else {
            message.innerHTML = "Opps..";
          }
        });
      });
    }

    letsPlay.innerHTML = "Next";
  });
}

letsPlay.addEventListener("click", function () {
  playGame();
});
