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

//  We've now created and defined all the basic user answer variables through simple prompts. We've also thrown in a couple prompts. Now
//      we will create a parallel set of variables that we'll use as a tally. We'll keep it simple, numbers 1-10, in order of when they
//      were captured from the user.

var q1 = likesDogs.toLowerCase();
console.log('var q1 from likesDogs is value : ' + q1);
if(q1 === 'yes' || q1 === 'y'){
    var q1 = 1;
}   else{
    var q1 = 0;
}
console.log('converted q1 value is : ' + q1);
//  Our model to turn our answers yes/no's into binary information is a success! Now we can start the arduous process of converting all of
//      that information into usable data for our game model.

var q2 = likesTravel.toLowerCase();
if(q2 === 'yes' || q2 === 'y'){
    var q2 = 1;
}   else{
    var q2 = 0;
}
console.log('converted q2 value is : ' + q2);

var q3 = likeToVisit.toLowerCase();
console.log('q3 is a non-binary answer for var likeToVisit. q3 is : ' + likeToVisit);

var q4 = hasPets.toLowerCase();
if(q4 === 'yes' || q4 === 'y'){
    var q4 = 1;
}   else{
    var q4 = 0;
}
console.log(hasPets + ' converted q4 value is : ' + q4);

var q5 = diy.toLowerCase();
console.log('q5 is a non-binary answer for var diy. q3 is : ' + diy);

var q6 = rickMorty.toLowerCase();
if(q6 === 'yes' || q6 === 'y'){
    var q6 = 1;
}   else{
    var q6 = 0;
}
console.log(rickMorty + ' converted q6 value is : ' + q6);

var q7 = scubaDive.toLowerCase();
if(q7 === 'yes' || q7 === 'y'){
    var q7 = 1;
}   else{
    var q7 = 0;
}
console.log(scubaDive + ' converted q7 value is : ' + q7);

var q8 = procrastinates.toLowerCase();
if(q8 === 'yes' || q8 === 'y'){
    var q8 = 1;
}   else{
    var q8 = 0;
}
console.log(procrastinates + ' converted q8 value is : ' + q8);

var q9 = heritage.toLowerCase();
console.log('q9 is a non-binary answer for var heritage. q9 is : ' + heritage);

var q10 = primeNumber.toLowerCase();
if(q10 === 'yes' || q10 === 'y'){
    var q10 = 1;
}   else{
    var q10 = 0;
}
console.log(primeNumber + ' converted q10 value is : ' + q10);


