'use strict';

// List of variables I plan to create:
// userName, likesTravel, likesDogs, scubaDive, hasPets, rickMorty, procrastinates, primeNumber, likeToVisit, heritage, diy

// Initial message
alert('Hello, I\'m Brett! Happy to have you here. I would like to ask you some questions to get to know each other.');

var userName = prompt('Let\'s start with your first name. I\'d like to know who I\'m talking with!');
console.log('The user\'s name is: ' + userName);

alert('Happy to meet you, ' + userName + '! Thank you for coming here. Let\'s begin.');

// Game questions begin here
var likesDogs = prompt('Do you enjoy spending time with dogs?');
console.log('Does ' + userName + ' like dogs? : ' + likesDogs);

var likesTravel = prompt('Do you like to travel around at all?');
console.log('Does ' + userName + ' like to travel? : ' + likesTravel);

var likeToVisit = prompt('Where is somewhere you would like to visit?');
console.log('Where is somewhere ' + userName + ' would like to visit? : ' + likeToVisit);

var hasPets = prompt('I have one dog, a sweet and hyper puppy still. Have you ever had any pets?');
console.log('Has  ' + userName + ' ever had any pets? : ' + hasPets);

var diy = prompt('I like to create things, whether with my hands or my mind. What\'s the last thing your built or made yourself?');
console.log('What was the last thing ' + userName + ' created? : ' + diy);

alert('Thank you for answering my questions. You\'re halfway there, almost done!');

var rickMorty = prompt('Rick and Morty has become a really popular show. Do you watch it?');
console.log('Does ' + userName + ' watch Rick and Morty? : ' + rickMorty);

var scubaDive = prompt('There\'s a whole new world underwater. Have you haver gone scuba diving to see it?');
console.log('Has ' + userName + ' ever gone scuba diving? : ' + scubaDive);

var procrastinates = prompt('I don\'t like to be lazy, but sometimes I tend to procrastinate things. Do you do that as well?');
console.log('Is ' + userName + ' lazy and likes to procrastinate? : ' + procrastinates);

var heritage = prompt('I recently did a DNA test to learn about my heritage. It was very fun to learn about it, and quite insightful. What region does your family come from?');
console.log(userName + '\'s family comes from: ' + heritage);

var primeNumber = prompt('I am a bit of a nerd, and like things like prime numbers. Is your favorite number a prime number?');
console.log('Is ' + userName + '\'s favorite number a prime number? : ' + primeNumber);

