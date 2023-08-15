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

let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});


// number guesser function

function numberGuesser(e) {
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    console.log(`Please enter a number between ${min} and ${max}`, 'red');
  }

    // Check if won
    if(guess === winningNum){

      // game over -- won
      gameOver(true, `${winningNum} is correct, YOU WIN!`);

    } else {
      guessesLeft -= 1;
      if(guessesLeft > 0)
      guessInput.value = '';
      setMessage( `incorrect try again!  you have ${guessesLeft} guesses left` , 'red' );
      if(guessesLeft === 0) {
        // game over -- lost
        gameOver(false, `Game Over! you lost.  ${winningNum} was the correct number.` );
      }
  
    }

  e.preventDefault();
}

// game over function

function gameOver(won, msg) {
  won === true ? color = 'green' : color = 'red';

     // Disable input
     guessInput.disabled = true;
     // Change border color
     guessInput.style.borderColor = color;
     //set message
      setMessage(msg, color);
      
      // if game over changing submit btn to play again
      guessBtn.value = 'Play Again';
      guessBtn.className += 'play-again';
      
   

}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

// getting  winning random number between min and max value

function getRandomNum(min, max) {
return Math.floor(Math.random() * ((max-min)+1) + min);
}