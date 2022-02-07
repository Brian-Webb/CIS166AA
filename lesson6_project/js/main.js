const playGameButton = document.querySelector('#playGame');
playGameButton.addEventListener('click', (el) => {
  playGame();
});

// Create a function called playGame().
function playGame(min = 50, max = 75) {
  // get random number
  // - add '1' to ensure we get that as a minimum, instead of 0
  // - multiple the random by '99' (100-1) to convert the decimal to a whole number between the two values
  const randomNumber = Math.floor(Math.random() * (99)) + 1;

  // create the gameWon
  const gameWon = (randomNumber > min) && (randomNumber < max);

  // create results message
  const message = gameWon
    ? `Your Number: ${randomNumber}, You Won!`
    :  `Your Number: ${randomNumber}, Keep Trying!`;

  // output results message
    // set the min/max value display content
    document.querySelector('#minNumber').textContent = min.toString();
    document.querySelector('#maxNumber').textContent = max.toString();

    // reveal the title
    document.querySelector('#title').style.visibility = 'visible';

    // update the results message
    document.querySelector('#result').textContent = message;
}