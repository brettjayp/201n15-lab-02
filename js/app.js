'use strict';

// eslint-disable-next-line no-undef
var gameResultsGlobal = []; // I'm trying something new. Here is where I will store the values of the game results for global use.
// eslint-disable-next-line no-unused-vars
var userName = '';
// eslint-disable-next-line no-unused-vars
var gameTally = 0;

//
//  Here is the function I will call to ask each question.
//
// eslint-disable-next-line no-unused-vars
function aboutMeQuestion(varName, question, myAnswer, ifYes, ifNo, yesNo){
  // Here I will create the question object that I will append to gameResultsGlobal
  varName = {
    title: varName,
    question: question,
    userAnswer: '',
    compareTo: myAnswer,
    isCorrect: false,
    ifTrue: ifYes,
    ifFalse: ifNo,
    isYesNo: yesNo,

    output: function(){
      console.log(`This question's object is ${this.title}, the user's answer is ${this.userAnswer}, compared to ${this.compareTo} it is ${this.isCorrect}.`);
    },

    yes: function(){
      if(varName.isYesNo === true){
        if(varName.userAnswer.toLowerCase() == 'yes' || varName.userAnswer.toLowerCase() == 'y'){
          varName.isCorrect = true;
          gameTally++;
        }
      } else {
        varName.isCorrect = 'N/A';
        varName.compareTo = 'N/A';
      }
    }
  };

  // Here is where all the questions will happen.
  // Here is where the question will happen IF the previous question was to ask the user's name.
  if(gameResultsGlobal.length === 1){
    varName.userAnswer = prompt(`${question}`);
    varName.yes();
    console.log(gameResultsGlobal);
  } else {
    // Here is where the question will happen IF the previous question WAS a yesNo question AND the answer WAS CORRECT.
    if(gameResultsGlobal[gameResultsGlobal.length-1].isYesNo === true && gameResultsGlobal[gameResultsGlobal.length-1].isCorrect === true){
      varName.userAnswer = prompt(`${gameResultsGlobal[gameResultsGlobal.length-1].ifTrue}\n\n${question}`);
      varName.yes();
    }
    // Here is where the question will happen IF the previous question WAS a yesNo question AND the answer WAS NOT CORRECT.
    else if (gameResultsGlobal[gameResultsGlobal.length-1].isYesNo === true && gameResultsGlobal[gameResultsGlobal.length-1].isCorrect === false){
      varName.userAnswer = prompt(`${gameResultsGlobal[gameResultsGlobal.length-1].ifFalse}\n\n${question}`);
      varName.yes();
    }
    // Here is where the question will happen IF the previous question WAS NOT a yesNo question, regardless if THIS question is a yesNo question.
    else {
      varName.userAnswer = prompt(`${gameResultsGlobal[gameResultsGlobal.length-1].ifTrue}\n\n${question}`);
      varName.yes();
    }
  }

  // Here I push the details about the question object to gameResultsGlobal.
  gameResultsGlobal.push(varName);

  // This is the last thing I want to do in this function. This is just the output I want to see in the console.log after the user answers their questions.
  gameResultsGlobal[gameResultsGlobal.length-1].output();
}

// Here is the actual game itself. This is the function that will run when the user clicks to begin the game.
// eslint-disable-next-line no-unused-vars
function aboutMeGame(){
  //  Here I will declare any variable I want kept inside the function/game.

  //  Here I create the functions I need to call within the game.

  //  Here I greet the user and prompt them for their name.
  alert('Hello, I\'m Brett! Happy to have you here. I would like to ask you some questions to get to know each other.');
  userName = prompt('Let\'s start with your first name. I\'d like to know who I\'m talking with!');
  gameResultsGlobal.push(userName);
  console.log(`The user's name is ${gameResultsGlobal[0]}`);
  alert(`Happy to meet you, ${gameResultsGlobal[0]}! Thank you for coming here. Let's begin with a quick game.`);

  //  Here I ask the first 5 questions.
  //  Remember. (varName, question, myAnswer, ifYes, ifNo, isYesNo)
  aboutMeQuestion('likesDogs', 'Do you enjoy spending time with dogs?', 'yes', 'Hey, awesome! So do I. In fact, I go to the dog park frequently.', 'Oh, bummer. I think they\'re usually pretty fun.', true);
  aboutMeQuestion('likesTravel', 'Do you like to travel around at all?', 'yes', 'Great, I enjoy traveling too! I recently enjoyed a cruise in Europe!', 'Hey, traveling isn\'t for everybody. Staying local is pretty cool too, there\'s lots to do here!', true);
  aboutMeQuestion('likeToVisit', 'Where is somewhere you would like to visit?', '', 'There are lots of places I would still like to visit.', '', false);
  aboutMeQuestion('hasPets', 'I have one dog, a sweet and hyper puppy still. Have you ever had any pets?', 'yes', 'That\'s cool, I think they make great companions!', 'Oh, I wonder why not. I think they are great fun.', true);
  aboutMeQuestion('diy', 'I like to create things, whether with my hands or my mind. What\'s the last thing you built or made yourself?', '', 'I\'m frequently using my 3D printers to make things, feel free to ask what my last print was!', '', false);

  //  Here I make a statement halfway.
  alert('Thank you for answering my questions. You\'re halfway there, keep on going!');

  //  Here I ask the remaining 5 question.
  aboutMeQuestion('rickMorty', 'Rick and Morty has become a really popular show. Do you watch it?', 'yes', 'So do I! I think that it\'s hilarious. I would like to go on one of their adventures!', 'Oh that\'s okay! It\'s pretty funny, but it\'s not for every taste.', true);
  aboutMeQuestion('scubaDive', 'There\'s a whole new world underwater. Have you haver gone scuba diving to see it?', 'yes', 'I really like diving, I hope you enjoyed it!', 'Oh that\'s too bad, hopefully you get a chance to (if you want to)!', true);
  aboutMeQuestion('procrastinates', 'I don\'t like to be lazy, but sometimes I tend to procrastinate things. Do you do that as well?', 'yes', 'It can be a tough habit to break sometimes, can\'t it?', 'You\'re fortunate! It can be very troublesome at times.', true);
  aboutMeQuestion('heritage', 'I recently did a DNA test to learn about my heritage. It was very fun to learn about it, and quite insightful. What region does your family come from?', '', 'That\'s pretty neat. I\'m mostly Scandinavian, Irish, and English. I like to joke that my ancestors must have been Vikings!', '', false);
  aboutMeQuestion('primeNumber', 'I am a bit of a nerd, and like things like prime numbers. Is your favorite number a prime number?' ,'yes', '', '', true);

  //  Here I give the user their results and end the game.
  if (gameTally < 4){
    alert('You only scored ' + gameTally + ' out of 7, you didn\'t pass my test. You should read my \'About Me\' page to learn more about me, maybe we can be better friends');
  } else {
    alert('Great. You scored ' + gameTally + ' out of 7! We should probably be friends! You should read my \'About Me\' page so that we can be better friends.');
  }
}



// The below is commented out at this time because the 'x'Global variables no longer exist. Those are now obsolete aver I have converted my game to use object literals. I'll redo them later, and re-enable the results button once I do (unless the results chart makes it obsolete too).
//
// // var likesDogs, likesTravel, likeToVisit, hasPets, diy, rickMorty, scubaDive, procrastinates, heritage, primeNumber;
// // eslint-disable-next-line no-unused-vars
// function showAnswers(){
//   // eslint-disable-next-line no-undef
//   alert(likesDogsGlobal + ' ' + likesTravelGlobal + ' ' + likeToVisitGlobal + ' ' + hasPetsGlobal + ' ' + diyGlobal + ' ' + rickMortyGlobal + ' ' + scubaDiveGlobal + ' ' + procrastinatesGlobal + ' ' + heritageGlobal + ' ' + primeNumberGlobal);
//   // eslint-disable-next-line no-undef
//   alert(userNameGlobal);
// }

// Here we will introduce "lab-3 question-6" where we ask the user to guess a numeric value, a-la "guess my favorite number". One stretch goal is to make the number that they must guess a random value. Personally, I wouldn't like to assign a random value as MY favorite number, so we'll do a "guess what number I'm thinking of" game.
// A temporary note. I plan to introduce this into the webpage as a standalone button/game. Adding it to the main game would be easy enough to do, however, integrating it fully would take some planning. I'll do that work later, let's just get this added to the code so we can submit it as it's well past due.
var numbersGuessed = [];
// eslint-disable-next-line no-unused-vars
function guessNumber(){
  var randomNumber = Math.floor((Math.random() * 100) + 1);
  var attempt = 0;
  console.log('The random number currently assigned to guessNumber is ' + randomNumber);
  for(attempt; attempt < 4; attempt++){
    var localGuess = prompt('Let\'s play a guessing game. I\'ll give you four chances to guess what number I\'m thinking of!');
    numbersGuessed.push(localGuess);
    console.log('the user just guessed the number ' + localGuess + ' and the correct answer is ' + randomNumber + '.');
    // eslint-disable-next-line eqeqeq
    if(localGuess == randomNumber){
      attempt = 4;
      alert('Great job! You must be psychic. You guessed ' + localGuess + ' which is correct! Do you think you can guess it right again?');
    } else if(attempt < 3){
      alert('Bummer, ' + localGuess + ' isn\'t the correct answer. You should guess again!');
    } else {
      alert('Darn, ' + localGuess + 'wasn\'t the correct answer either. You\'re all out of guesses now.\n\nThe correct answer this time was ' + randomNumber + '. You can play again, maybe you\'ll have better luck!');
    }
  }
  console.log('The user guessed the numbers ' + numbersGuessed[0] + ', ' + numbersGuessed[1] + ', ' + numbersGuessed[2] + ', and ' + numbersGuessed[3]);
}

// Here we introduct "lab-03 question-7". We need to ask a question that has multiple correct answers stored in an array, gives the user six attempts, and regardless if the user guesses correctly, all values will be displayed to the user in the end.
var visitList = ['USA', 'Canada', 'Mexico', 'Guatemala', 'Honduras', 'Costa Rica', 'Bahamas', 'Aruba', 'Chile', 'Brazil', 'Argentina', 'Spain', 'Monaco', 'France', 'Italy', 'England', 'Thailand', 'Malaysia'];
var visitListLowerCase = visitList;
for(var i = 0; i < visitListLowerCase.length ; i++){
  visitListLowerCase[i] = visitListLowerCase[i].toLowerCase();
}
var visitGuess = [];
// eslint-disable-next-line no-unused-vars
function guessTravel(){
  alert('In this game, you\'re given six attempts to guess any country that I have visited. Click \'OK\' to play!');
  for(var attempt = 0; attempt < 6; attempt++){
    var localGuess = prompt('What\'s your guess?');
    console.log('In the travel guessing game, the user just guessed ' + localGuess + '.');
    visitGuess.push(localGuess);
    localGuess = localGuess.toLowerCase();
    console.log('The user\'s guess returns a value of ' + visitList.indexOf(localGuess) + '.');
    if(visitListLowerCase.indexOf(localGuess) > -1){
      alert('Wow, that\'s impressive, you correctly guessed one of the countries that I\'ve visited!');
      attempt = 6;
      break;
    } else if(attempt < 5){
      alert('Darn, that isn\'t correct. You still have some tries remaining, you should guess again!');
    } else {
      alert('Shoot, you didn\'t guess correctly within 6 tries. That\'s okay though, there\'s so many countries to guess!');
    }
  }
  // The below method of displaying all values is actually quite a terrible method, as there's no spacing, and we seem to lose all of the capital letters as well. Buuuuuuut it fulfills the need and we're way past due. It'll have to do for now.
  alert('All of the countries I have visited are ' + visitList.toString() + '.\n\nYes, I have visited USA. I used to live in another country, so I would visit the US during that time.');
}
