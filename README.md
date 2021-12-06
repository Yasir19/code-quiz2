# code-quiz
## user story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Acceptance Criteria
GIVEN I am taking a code quiz
## must have feature 
1-WHEN I click the start button
THEN a timer starts and I am presented with a question
2- WHEN I answer a question
THEN I am presented with another question
3- WHEN I answer a question incorrectly
THEN time is subtracted from the clock
4-WHEN all questions are answered or the timer reaches 0
THEN the game is over
5- WHEN the game is over
THEN I can save my initials and score


1.create a foor loop based on the question array 
we dont need ul
2-var answerBtn = document.createElement(btn, )
3- create another for loop to loop through the answer


    //get cuurent question object from the array 
    var currentQuestion = questions[questionIndex];
    questionEl.textContent=currentQuestion.question;
    var questionIndex= 0;
    4. Inside the for loop
   Create a button
   Create a Li
   Set the text of the button equal to currentQuestion.choices[i]
   Add an eventListener to the button
   Append the button to the Li
   Append the Li to the selectionEl


the-question


1:00
And that should do it!
1:00
Good luck!!



        question:"A very usful tool during development and debugging for printing content to the debugger is:",
        choices:["JavaScript","Terminal / Bush", "For loops","Console.log"],
        answer:"console.log" i + 1 + "." +