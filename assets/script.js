var questionIndex =0;
var time;
var score;
var questions =[
    {
     question:"Commnly used data types Do NOT include",
     choices:["Strings", "Booleans", "Alerts", "Numbers"],
     answer:"Alerts"
    }, 
    {
        question:"The condition in an if/eles statment is enclosed with____.?",
        choices:["Quotes","Curly brackets", "Parentheses","Square brackets"],
        answer:"Parentheses"
    },
    {
        question:"Arrays in HavaScript can be user to store____.?",
        choices:["Numbers and Strings","Other arrys", "Bolleans", "All of the above"],
        answer:"All of the above"
    },
    {
        question:"String Values must be enclosed within ______ when being assigned to variables.",
        choices:["Commas","Curly brackets", "Quotes","Parentheses"],
        answer:"Quotes"
    },
    {
        question:"A very usful tool during development and debugging for printing content to the debugger is:",
        choices:["JavaScript","Terminal / Bush", "For loops","Console.log"],
        answer:"Console.log"
    }
];
var timer=questions.length * 15; 



//veriable to refrence DOM element 
var questionEl =document.getElementById("questions-list");
var theQuestionEl= document.getElementById("the-question");
var selectionEl =document.getElementById("selection");
var timerEl =document.getElementById("time");
var startBtn =document.getElementById("start");
var inputEl= document.getElementById("init");
var submitBtn =document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");
var allDoneEl =document.getElementById("all-done");
var finalScoreEl=document.getElementById("time");
var clearBtn =document.getElementById("Clear");
var scoreEl = document.getElementById("sco");
var olEl =document.getElementById("highScoreList");
var highScorEl = document.getElementById("highScorese");



//start the quiz
var startQuiz = function(){
    // hide the start-quize div
    var startQuizEl =document.getElementById("start-quiz");
    startQuizEl.setAttribute("class", "hide");

    //revel quastion
    questionEl.style.display ="block";
    //set timer
    //1- define timer veriable and returen the question lenghth array * 15 to get 75 second 
    //2- define a variable with Setinterval method that hvae function as unarrgument 
    //3- reduce the timer by one 
    //4- print the timer to the timer element by using textContent method
   time = setInterval(timeLeft,1000);
   timerEl.textContent=timer;

getQuestion();
}
// get question function 
var getQuestion = function(){
    // cleare the questionEl and selectionEl
    selectionEl.innerHTML="";
    //get cuurent question object from the array 
    var currentQuestion = questions[questionIndex];
    //update the-question with the current question 
    theQuestionEl.textContent=currentQuestion.question;
    // loop over the choices array 
    for (var i=0;i<= currentQuestion.choices.length; i++){
          //create new button for each choise
          choicesBtn = document.createElement("button");
          var choicesList =document.createElement("li");
          // choicesBtn.setAttribute("value",choice);
          choicesBtn.textContent = i + 1 + "." + currentQuestion.choices[i];
          choicesBtn.setAttribute("value",currentQuestion.choices[i]);
          selectionEl.appendChild(choicesList);
          choicesList.appendChild(choicesBtn);
        //   choicesBtn.addEventListener("click",answerStatus);
        choicesBtn.onclick = answerStatus;
    }
}
        //check the answerStatus 
        var answerStatus =function(){
            var correctAnswer = questions[questionIndex];
          if(this.value === correctAnswer.answer){
              feedbackEl.style.display = "block";
              feedbackEl.textContent="Correct!"
          }else{
            feedbackEl.style.display = "block";
            feedbackEl.textContent = "Wrong!";
            timer-=15;
        }

        questionIndex++;
        if(questionIndex ===questions.length){
            stopQyiz();
        }else{
            getQuestion(); 
        }   
    }
    var stopQyiz=function(){
            clearInterval(time);
            allDoneEl.style.display="block";
            finalScoreEl.textContent =timer;
            questionEl.style.display ="none";
    }
// check time function 
var timeLeft =function(){
    //update time
    timer--;
    timerEl.textContent=timer;
    //check time 
    if (timer === 0){
        stopQyiz()
    }
}
// save highScore 
var saveScore =function(){
    // get the value of the input 
    var initials= inputEl.value.trim()
    //make sure there is intial
    if (initials !==""){
        var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
        var newScore ={
            score : timer,
            initials:initials
        };
        highScores.push(newScore);
        window.localStorage.setItem("highScores",JSON.stringify(highScores));
        allDoneEl.style.display="none";
        feedbackEl.style.display="none";
        scoreEl.style.display="block";
    }
    //set score
    var scores = function(){
        //git score from localstorage or set to empty array
        score = JSON.parse(window.localStorage.getItem("highScores")) || [];
        //sort the score
        score.sort(function(a,b){
            return b.score - a.score
        })
        for (var i = 0; i<score.length; i++){
            var liItems= document.createElement("li")
            liItems.textContent=score[i].initials + ":" + score[i].score;
            olEl.appendChild(liItems);
    }
    var clearScore = function(){
        localStorage.clear();
        olEl.style.display="none";

    }
    
    clearBtn.addEventListener("click",clearScore);
    }
    var restart =function(){
        document.location.reload();
    }
    var BackBtn = document.getElementById("Back");
    BackBtn.addEventListener("click",restart);
    scores();
}
var showScore =function(){
    var x =localStorage.getItem("highScores")
    return x;
}
       
startBtn.addEventListener("click",startQuiz);
submitBtn.addEventListener("click",saveScore);
highScorEl.addEventListener("click",showScore);