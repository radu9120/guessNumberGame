'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 🎉Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 🥲';

    //When a player wins
  } else if (guess > 20) {
    document.querySelector('.message').textContent = 'Not allowed number🥲';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      textContent = highScore;
    }

    //Guess above secret number with loss implementation!
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Number to High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🥶';
      document.querySelector('.score').textContent = 0;
    }
    //Guess is lower than secret number.
  } else if (guess < secretNumber) {
    //Guess lower than secret number with loss implmentation!
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number to Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🥶';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
