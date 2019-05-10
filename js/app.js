'use strict';
// initialize the user's guessing score
var userScore = 0;



// function takes an input from a prompt then normalizes it. Based on the users answer their userScore will be updated. Then once the user is done their score will be displayed on page.
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

//This code block asks a serious of prompting questions to the user and then runs their answer through the guessingGame function
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

//for loop gives the user six chances to guess a country in which i've lived in
for(var i = 0; i < 7; i++){
  var myCountryGuess = prompt('Can you guess one of the countries I\'ve lived in besides the United states? You get six tries!');
  if(myCountryGuess.toLocaleLowerCase() === 'germany' || myCountryGuess.toLocaleLowerCase() === 'canada'){
    alert('You got it right!');
    break;
  } else if(i === 6){
    alert('Sorry you used up all of your guesses');
  }else {
    alert('Nice try but I haven\'t lived there! Guess again');
  }
}



