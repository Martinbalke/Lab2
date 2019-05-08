'use strict';
// initialize the user's guessing score
var userScore = 0;


// function takes the user input from a prompt and returns a correct or incorrect alert then updates the users score to reflect their guess
function guessingGame(guess){
  if (guess.toLocaleLowerCase() === 'y' || guess.toLocaleLowerCase() === 'yes' ){
    userScore++;
    alert('That\'s right! now you\'re ' + userScore + ' out of 5!');
    console.log('User guessed ' + guess + ' they were right and currently have a score of ' + userScore + ' out of 5');
    document.getElementById('scoreBoardCounter').innerHTML = userScore + ' out of 5';
  }
  else if (guess.toLocaleLowerCase() === 'n' || guess.toLocaleLowerCase() === 'no' ){
    alert('Sorry you guessed wrong! Right now you\'re ' + userScore + ' out of 5');
    console.log('User guessed ' + guess + ' they were wrong and currently have a score of ' + userScore + ' out of 5');
  } else{
    alert('Sorry, please guess yes or no! You missed your point for this round.');
  }
  
}
setTimeout(function(){
  var myNameGuess = prompt('Lets play a guessing game so that we can learn about me the author! The first question is, is my name Martin?');
  guessingGame(myNameGuess);

  var myJobGuess = prompt('Okay, on to the next question. Is my job working in food?');
  guessingGame(myJobGuess);

  var myFoodGuess = prompt('You\'ve been working hard so I will throw you an easy question on this next one! Do I like to eat pizza?');
  guessingGame(myFoodGuess);

  var myMusicGuess  = prompt('Okay how about a harder question. Is Disco my favorite kind of music?');
  guessingGame(myMusicGuess);

  var myCodingGuess = prompt('You\'re almost at the end! Last question this time. Do you think I love coding!?');
  guessingGame(myCodingGuess);



}, 200);


