# 201n15-lab-02
Code Fellows, Class 201n15, Lab 02

README - Brett Packard, Class 201n15, Lab 02, ABOUT ME

The objective of this lab, at this time, is to create an "About Me" webpage that has a "game" that meets certain grading criteria, using the knowledge we've learned so far and are capable of.

Some of the requirements that I think are key to focus on are as follows:
-At least 5 questions.
-Questions must be a mix of yes/no and user input questions.
-All yes/no questions must accept yes, no, y, and n, with any combination of type case.
-Need to create useful and descriptive output into console.log
-Must remember to follow ACP frequently.

Some initial brainstorming brings me to an idea, "Are we friends?", where the webpage asks a series of questions regarding the user's interests and personality traits, and in the end, it will tell the user if it thinks they would be friends with me. I think that the easiest way to do this at this point in my education is to ask several y/n questions such as "do you like X activity?" and find a way to tally the yes answers, and if they exceed a threshold, give a positive result to the user. It would be difficult at this time to factor complex answers, such as "what is your favorite TV show?", but those could be an excellent way to include details about the user in the final output, ie "I would love to watch 'fav tv show' with you", regardless if the outcome is positive or negative. While the interactions in the game revolve around the USER'S input, it would tie in to an "About Me" project because it would compare "About Me" with "About you", and I could creatively tie in comparisons to "About Me" in the final page output.

I've now created my main variables, and prompt questions for them. I'll probably need to refine them later, and I definetly want to make them a bit more interactive. I think what I'll need to do now in order to be able to tally all the "yes" responses is to create a second set of variables, in parallel to the main answers, and set their values to either 0 or 1, 1 if the original is a yes. A very roundabout way, not efficient whatsoever, but it's what I have available to me at this time in the class. At the end, there will be a final value variable ("answerTally" or something like that), and if it's equal to or greater than 7 (total possible is 10), then the user gets the positive result as an output.

I took the time to convert all the answers to binary values, only to remember I didn't need to. Attention to detail! Correction to the statement in the previous paragraph, there are a total of 7 yes/no questions, so I'll set the threshold to qualify as a friend as 5/7. Will go back and remove the code to convert the non-yes/no answers to binary values.

August 17, 19 (pair programming with James)
I worked on js and created a function to run yes/no questions, and to score 1 point everytime the user chooses the right answer. And at the end it makes a sum of all points and displays a fancy message according to the obtained score! This saved 70 lines of code. 

August 20, 2019
Continued to work on js.app . Added functions to make all questions after the first question "react" to the previous yes/no question's result, or in the case they follow a question other than yes/no, they still "react" but without discrimination. Also changed choice of color palette to use for styling.