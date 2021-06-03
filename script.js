let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('lowrOrhi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessfield = document.querySelector('guessField');

let guessCount =1;
let resetButton;


function checkGuess() {
 let userGuess = Number (guessField.value);
 if (userGuess === randomNumber){
     lastResult.textContent = 'Congratulations you got it right';
     lastResult.style.backgroundColor = 'green';
     lowOrhi.textContent = '';
     setGamerOver()
     
     
 } else if(guessCount === 10) {
     lastResult.textContent = 'Game is over';
     setGamerOver()
 } else{
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

 guessCount ++;
 guessfield.value = '';
 guessfield.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGamerOver() {
    guessfield.disabled = true;
    guessSubmit.disabled =true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'star new game';
    document.body.oppened(resetButton);
    resetButton.addEventListener('click', resetGame);

}

function resertGame(){
   guessCount = 1;

   const resertParas = document.querySelectorAll('.resultParas p');
   for( let i = 0; i < resertParas.length; i ++){
       resertParas[i].textContent = '';
       

   }
   resetButton.parentNode.removeChild(resetButton);

   guessfield.disabled = false;
   guessSubmit.disabled = false;
   guessfield.value ='';
   guessfield.focus();

   lastResult.style.backgroundColor = 'White';

   randomNumber = Math.floor(Math.random() * 100) + 1;
}
