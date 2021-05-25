let randomNumber = match.floor(match.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lasResult = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('lowOhi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessfield = document.querySelector('guessField');

let guessCount =1;
let resetButton;

function checkGuess() {
 let userGuess = Number (guessField.value);
 if (userGuess === randomNumber){
     lasResult.textContent = 'Congratulations you got it right';
     lasResult.style.backgroundColor = 'green';
     lowOrhi.textContent = '';
     setGamerOver()
     
     
 } else if(guessCount === 10) {
     lasResult.textContent = 'Game is over';
     setGamerOver()
 } else{
     lasResult.textContent = 'Wrong';
     lasResult.style.backgroundColor = 'red';
     if (userGuess < randomNumber) {
         lowOrhi.textContent = 'Too low';

     }else {
         lowOrhi.textContent = 'Too high'
     }
 }

 guessCount ++;
 guessfield.value = '';
 guessfield.focus();
}

guessSubmit.addEventListener('click, checkGuess');

function setGamerOver() {
    guessfield.disabled = true;
    guessSubmit.disabled =true;
    resetButton = document.createElement('button');
    resetButton.textContent = ' star new game';
    document.body.oppened(resetButton);
    resetButton.addEventListener('click', resertGame);

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

   lasResult.style.backgroundColor = 'White';

   randomNumber = Math.floor(Math.random() * 100) + 1;
}

