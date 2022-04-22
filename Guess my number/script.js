// Selectors
const checkBtn = document.querySelector(".main__btn-check");
const againBtn = document.querySelector(".header__btn-again")
const userMessage = document.querySelector(".main__message");
const secretNumber = document.querySelector(".header__number");
let elementBody = document.querySelector("body")
let score = document.querySelector(".main__label-score .score");
let secretRandomNumber = Math.trunc(Math.random() * 20) + 1;
let highScoreElement = document.querySelector(".highscore");
let scoreDeg = 20;
let highScore = 0;

//Function
const displayMessage = function (message) {
  document.querySelector(".main__message").textContent = message
}

// Event
checkBtn.addEventListener("click", () => {
  const userNumber = Number(
    document.querySelector(".main__guess-number").value
  );
  if (!userNumber) {
    userMessage.textContent = "⛔️ No number!";
  } else if (userNumber === secretRandomNumber) {
    displayMessage("🎉 Correct Number!")
    secretNumber.textContent = secretRandomNumber;
    elementBody.style.backgroundColor = "#60b347"
    secretNumber.style.width = "26rem"
    secretNumber.style.padding = "2.5rem 0rem"
    if (scoreDeg > highScore) {
      highScore = scoreDeg
      highScoreElement.textContent = highScore;
    }
  } else if (userNumber !== secretNumber) {
    if ( scoreDeg > 1)  {
      displayMessage(userNumber > secretRandomNumber ? "📈 Too high!!" : "📉 Too low!!")
      scoreDeg--; 
      score.textContent = scoreDeg;   
    } else{
     userMessage.textContent = "💥 You lost the game!"
     score.textContent = 0
    }
  }
});
againBtn.addEventListener("click", () => {
  document.querySelector(".main__guess-number").value = ""
  secretRandomNumber = Math.trunc(Math.random() * 20) + 1;
  scoreDeg = 20;
  score.textContent = scoreDeg
  secretNumber.style.width = "13rem"
  secretNumber.style.padding = "2rem 0rem"
  elementBody.style.backgroundColor = "#fff"
  userMessage.textContent = "Start guessing..."
  secretNumber.textContent = "?"

})

