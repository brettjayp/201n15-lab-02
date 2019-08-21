'use strict';

// Initial greeting, followed by prompt for name
alert('Hello, I\'m Brett! Happy to have you here. I would like to ask you some questions to get to know each other.');
var userName = prompt('Let\'s start with your first name. I\'d like to know who I\'m talking with!');
console.log('The user\'s name is: ' + userName);
alert('Happy to meet you, ' + userName + '! Thank you for coming here. Let\'s begin with a quick game.');

// Here we define a couple variables for later use, and prepare a function to tally yes answers for our game. Our tally function also outputs to console.
var lastYN = 0;
var tally = 0;
function plus1(){
  tally++;
  console.log('Tally is now ' + tally + ' and lastYN value is ' + lastYN);
}

// Here we prepare the function for our first yes/no question. In it, we ask a question, the result of which becomes the value of the specified variable. We output to consol. If user answers yes, we run our tally function, and set our 'lastYN' value to 1 (yes), used later. If user answers no, we still ouput current values to console, and we set 'lastYN' to 0 (no).
function yesNo(question, varname){
var varname = prompt(question)
console.log(question + ' ' + varname);
if(varname.toLowerCase() === 'yes'){
    plus1();
    lastYN = 1;
    } else {
        console.log('Tally is still ' + tally + ' and lastYN value is ' + lastYN);
        lastYN = 0;
    }
}

// Here we prepare our function for all yes/no questions after the first one. We use 'lastYN' to determine if we should start with an 'ifYes' or an 'ifNo' string, which allows us to "react" to the previous yes/no question while asking our next qeustion. This makes the game seem like it's responding to the users answers without littering the screen with multiple unnecessary alert windows. Other than that, it works the same as 'yesNo'.
function nextYN(ifYes, ifNo, question, varname){
    if(lastYN === 1){
        varname = prompt(ifYes + question);
        console.log(question + ' ' + varname);
        if(varname.toLowerCase() === 'yes'){
            plus1();
        } else {
            console.log('Tally is still ' + tally + ' and lastYN value is ' + lastYN);
        }
    } else {
        varname = prompt(ifNo + question);
        console.log(question + ' ' + varname);
        if(varname.toLowerCase() === 'yes'){
            plus1();
        } else {
            console.log('Tally is still ' + tally + ' and lastYN value is ' + lastYN);
        }
    }
}

// Here we prepare our function used when asking questions that don't have a yes/no answer. It's setup to "react" to the previous yes/no question, just like 'nextYN' does, but it does not run 'plus1', thus it does not alter 'tally' or 'lastYN'. All of these questions are followed by another yes/no question, so we make the 'ifYes' and 'ifNo' strings identical in those questions, with some generic message that "reacts" to these questions.
function nextQ(ifYes, ifNo, question, varname){
    if(lastYN === 1){
        varname = prompt(ifYes + question);
        console.log(question + ' ' + varname);
    } else {
        varname = prompt(ifNo + question);
        console.log(question + ' ' + varname);
    }
}


// Here we prepare our variables for our questions, then we ask them by using our functions we prepared.
var likesDogs= '';
var likesTravel= '';
var likeToVisit= ''; // Not a YN question
var hasPets= '';
var diy= ''; // Not a YN question
var rickMorty= '';
var scubaDive= '';
var procrastinates= '';
var heritage= ''; // Not a YN qestion
var primeNumber= '';

yesNo('Do you enjoy spending time with dogs?', likesDogs);

nextYN('Hey, awesome! So do I. In fact, I go to the dog park frequently.\n\n', 'Oh, bummer. I think they\'re usually pretty fun.\n\n', 'Do you like to travel around at all?', likesTravel);

nextQ('Great, I enjoy traveling too! I recently enjoyed a cruise in Europe!\n\n', 'Hey, traveling isn\'t for everybody. Staying local is pretty cool too, there\'s lots to do here!\n\n', 'Where is somewhere you would like to visit?', likeToVisit);

nextYN('There are lots of places I would still like to visit.\n\n', 'There are lots of places I would still like to visit.\n\n', 'I have one dog, a sweet and hyper puppy still. Have you ever had any pets?', hasPets);

nextQ('That\'s cool, I think they make great companions!\n\n', 'Oh, I wonder why not. I think they are great fun.\n\n', 'I like to create things, whether with my hands or my mind. What\'s the last thing you built or made yourself?', diy);

alert('Thank you for answering my questions. You\'re halfway there, almost done!');

yesNo('Rick and Morty has become a really popular show. Do you watch it?', rickMorty);

yesNo('There\'s a whole new world underwater. Have you haver gone scuba diving to see it?', scubaDive);

yesNo('I don\'t like to be lazy, but sometimes I tend to procrastinate things. Do you do that as well?', procrastinates);

var heritage = prompt('I recently did a DNA test to learn about my heritage. It was very fun to learn about it, and quite insightful. What region does your family come from?');
console.log(userName + '\'s family comes from: ' + heritage);

yesNo('I am a bit of a nerd, and like things like prime numbers. Is your favorite number a prime number?', primeNumber);

if (tally < 4){
    alert('You only scored ' + tally + ' out of 7, you didn\'t pass my test. You should read my \'About Me\' page so that we can be better friends');
} else {
    alert('Great. You scored ' + tally + ' out of 7. We should probably be friends! You should read my \'About Me\' page so that we can be better friends');
}
