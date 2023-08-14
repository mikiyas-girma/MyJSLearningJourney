/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again

*/

// get elements 
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

guessBtn.addEventListener('click', numberGuesser);

// console.log(guess.value);

// lets declare variables

const min = 1;
const max = 10;
const winningNum = 2;
const guessesLeft = 3;

minNum.textContent = min;
maxNum.textContent = max;


// number guesser function

function numberGuesser(e) {
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    console.log(`Please enter a number between ${min} and ${max}`, 'red');
  }

    // Check if won
    if(guess === winningNum){
      // Disable input
      guessInput.disabled = true;
      // Change border color
      guessInput.style.borderColor = 'green';
      // Set message
      setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  
    } else {
  
    }

  e.preventDefault();
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}