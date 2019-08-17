'use strict';

alert('Hello, I\'m Brett! Happy to have you here. I would like to ask you some questions to get to know each other.');
var userName = prompt('Let\'s start with your first name. I\'d like to know who I\'m talking with!');
console.log('The user\'s name is: ' + userName);
alert('Happy to meet you, ' + userName + '! Thank you for coming here. Let\'s begin.');

var tally = 0;
function plus1(){
  tally++;
  console.log('Tally is now ' + tally);
}

function yesNo(question, varname){
var varname = prompt(question)
console.log(question + ' ' + varname);
if(varname.toLowerCase() === 'yes'){
    plus1();
    } else {
        console.log('Tally is still ' + tally);
    }
}

var likesDogs= '';
var likesTravel= '';
var hasPets= '';
var rickMorty= '';
var scubaDive= '';
var procrastinates= '';
var primeNumber= '';

yesNo('Do you enjoy spending time with dogs?', likesDogs);

yesNo('Do you like to travel around at all?', likesTravel);

var likeToVisit = prompt('Where is somewhere you would like to visit?');
console.log('Where is somewhere ' + userName + ' would like to visit? : ' + likeToVisit);

yesNo('I have one dog, a sweet and hyper puppy still. Have you ever had any pets?', hasPets);

var diy = prompt('I like to create things, whether with my hands or my mind. What\'s the last thing your built or made yourself?');
console.log('What was the last thing ' + userName + ' created? : ' + diy);

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
