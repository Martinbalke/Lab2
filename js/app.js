'use strict';
// initialize the user's guessing score
var userScore = 0;

//prompt the user to answer the first question


function guessingGame(guess){
  if (guess.toLocaleLowerCase() === 'y' || guess.toLocaleLowerCase() === 'yes' ){
    userScore++;
    alert('That\'s right! now you\'re ' + userScore + ' out of 5!');
    console.log('User guessed ' + guess + ' they were right and currently have a score of ' + userScore + ' out of 5');
  }
  else if (guess.toLocaleLowerCase() === 'n' || guess.toLocaleLowerCase() === 'no' ){
    alert('Sorry you guessed wrong! Right now you\'re ' + userScore + ' out of 5');
    console.log('User guessed ' + guess + ' they were wrong and currently have a score of ' + userScore + ' out of 5');
  } else{
    alert('Sorry, please guess yes or no');
  }
  
}
var myNameGuess = prompt('Lets play a guessing game so that we can learn about me the author! The first question is, is my name Martin?');
guessingGame(myNameGuess);

var myJobGuess = prompt('Okay, on to the next question. Is my job working in food?');
guessingGame(myJobGuess);
//check for answer and then update userScore based on right and wrong
// if (myNameGuess.toLocaleLowerCase() === 'yes' || myNameGuess.toLocaleLowerCase() === 'y'){
//   userScore++;
//   alert('That\'s right! now you\'re ' + userScore + ' out of 5!');
//   console.log('User guessed ' + myNameGuess + ' they were right and currently have a score of ' + userScore + ' out of 5');
// }
// else if (myNameGuess.toLocaleLowerCase() === 'no' || myNameGuess.toLocaleLowerCase() === 'n'){
//   alert('Sorry you guessed wrong! Right now you\'re ' + userScore + ' out of 5');
//   console.log('User guessed ' + myNameGuess + ' they were wrong and currently have a score of ' + userScore + ' out of 5');
// }



// if (myJobGuess.toLocaleLowerCase() === 'yes' || myJobGuess.toLocaleLowerCase() === 'y'){
//   userScore++;
//   alert('That\'s right! now you\'re ' + userScore + ' out of 5!');
//   console.log('User guessed ' + myJobGuess + ' they were right and currently have a score of ' + userScore + ' out of 5');
// }
// else if (myJobGuess.toLocaleLowerCase() === 'no' || myJobGuess.toLocaleLowerCase() === 'n'){
//   alert('Sorry you guessed wrong! Right now you\'re ' + userScore + ' out of 5');
//   console.log('User guessed ' + myJobGuess + ' they were wrong and currently have a score of ' + userScore + ' out of 5');
// }

var myFoodGuess = prompt('You\'ve been working hard so I will throw you an easy question on this next one! Do I like to eat pizza?');

// if (myFoodGuess.toLocaleLowerCase() === 'yes' || myFoodGuess.toLocaleLowerCase() === 'y'){
//   userScore++;
//   alert('That\'s right! now you\'re ' + userScore + ' out of 5!');
//   console.log('User guessed ' + myFoodGuess + ' they were right and currently have a score of ' + userScore + ' out of 5');
// }
// else if (myFoodGuess.toLocaleLowerCase() === 'no' || myFoodGuess.toLocaleLowerCase() === 'n'){
//   alert('Sorry you guessed wrong! Right now you\'re ' + userScore + ' out of 5');
//   console.log('User guessed ' + myFoodGuess + ' they were wrong and currently have a score of ' + userScore + ' out of 5');
// }

