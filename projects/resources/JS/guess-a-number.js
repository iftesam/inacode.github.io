const form = document.getElementById("guess-form");
const resetButton = document.getElementById("reset-button");
const message = document.getElementById("message");

let secretNumber;
let remainingGuesses;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  remainingGuesses = 7;
  resetButton.style.display = "none";
  message.innerHTML = `I'm thinking of a number between 1 and 100. I will give you hints. I challenge you to guess it in ${remainingGuesses} tries or less.`;
}

resetButton.addEventListener("click", function () {
  form.style.display = "flex"; // make the form visible
  resetButton.style.display = "none"; // hide the reset button
});

form.addEventListener("submit", function (event) {
  // Prevent the form from being submitted
  event.preventDefault();
  // Trigger the click event on the guess button
  guessButton.click();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const guessInput = document.getElementById("guess-input");
  const guess = parseInt(guessInput.value, 10);
  if (isNaN(guess)) {
    message.innerHTML = "Please enter a valid number.";
  } else {
    remainingGuesses -= 1;
    if (guess === secretNumber) {
      message.innerHTML = "You win! The number was " + secretNumber + ".";
      resetButton.style.display = "inline";
      form.style.display = "none";
    } else if (remainingGuesses === 0) {
      message.innerHTML = "You lose! The number was " + secretNumber + ".";
      resetButton.style.display = "inline";
      form.style.display = "none";
    } else if (guess < secretNumber) {
      message.innerHTML =
        "Your guess was low. You have " + remainingGuesses + " tries left.";
    } else {
      message.innerHTML =
        "Your guess was high. You have " + remainingGuesses + " tries left.";
    }
  }
  form.reset();
});

resetButton.addEventListener("click", startGame);

startGame();
