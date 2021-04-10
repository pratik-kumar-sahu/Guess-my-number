'use strict';

// Functions
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const isSecretNumber = (secretNumber, width) => {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = width;
};

const changeBgColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const currentScore = score => {
  document.querySelector('.score').textContent = score;
};

// Defining secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there's no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number!');
    isSecretNumber(secretNumber, '30rem');
    changeBgColor('#60b347');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Too High! Go 👇' : 'Too Low! Go 👆'
      );
      score--;
      currentScore(score);
    } else {
      displayMessage('🛑 You lost the game!');
      currentScore(0);
    }
  }
});

// On clicking again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore(score);
  changeBgColor('#222');
  displayMessage('Start guessing...');
  isSecretNumber('?', '15rem');
  document.querySelector('.guess').value = '';
});
