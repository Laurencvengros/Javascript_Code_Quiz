var startScreen = document.querySelector("#startscreen");
//var startQuiz = document.querySelector("#startquiz");
var startButton = document.querySelector("#startButton")
var quizPage = document.querySelector("#quizpage");
var countDown = document.querySelector("#countdown");
var questionList = document.querySelector("#questionlist");
var buttonA = document.querySelector("#A");
var buttonB = document.querySelector("#B");
var buttonC = document.querySelector("#C");
var buttonD = document.querySelector("#D");
var endGame = document.querySelector("#endgame");
var answerChoice = document.querySelector("#rightwrong");
var finalScore = document.querySelector("#finalscore");
var yourScore = document.querySelector("#yourscore");
var initialsEl = document.querySelector("#enterinitials");
var submitScore = document.querySelector("#submit");
var leaderboardEl = document.querySelector("#leaderboard");
var highscoreElm = document.querySelector("#highscorelist");
var leaderNamesDisplay = document.querySelector("#leaderinitials");
var leaderScoresDisplay = document.querySelector("#leaderscores");
var clearDataBtn = document.querySelector("#clearscoredata");
var playAgainBtn = document.querySelector("#playagain");

var timeRemaining = 60;
var timeClock;
var questionIndex = 0
var correctAnswer;
var score= 0;
var leaderBoard = [];
var text = document.createElement("text");



var quizQuestions =[
    {
    question: "Where is the correct place to link your Javascript to your HTML document?",
    
    A: "Above your linked CSS",
    B: "Anywhere on the page",
    C: "In the head of the document",
    D: "In the body of the document",
   
    correctChoice: "D"
},
{
    question: "Which of the following is not used to declare a variable?",
    
        A:"const",
        B: "get",
        C: "var",
        D: "let",
    
        correctChoice: "B",
},
{
    question: "Which of the following do you use for strictly equal comparisons?",
    
        A: "===",
        B: "==",
        C: "=",
        D: "Any of these will work",
    
        correctChoice: "A"
},
{
    question: "Which is the correct way to display text in an alert box?",
    
    
        A: "alertBox",
        B: "alert",
        C: "msg",
        D: "box",
    
        correctChoice: "B",

},
{
    question: "Which of the following is the correct syntax of a FOR loop?",
    
        A: " for( i=0, i++ )",
        B: "for( i++, i<8, i=8 )",
        C: "for (i=0, I<=8 )",
        D: "for( i=0, i <=9, i++ )",
    
        correctChoice: "D",
}
];

var quizLength = quizQuestions.length

function startQuiz() {
    startScreen.style.display = "none";
    addQuizQuestions();
    timeClock =setInterval(function(){
        timeRemaining --;
        countDown.textContent = "Time Remaining" + timeRemaining;
    if(timeRemaining === 0 || questionIndex === quizLength){
        clearInterval(timeClock);
        endGame.style.display = "block";
        quizpage.style.display = "none";
        displayScore();
    }
    
    }, 1000);
    quizPage.style.display = "block";
};



function addQuizQuestions(){
    
    var currentQuestion = quizQuestions[questionIndex];
    questionList.textContent = currentQuestion.question;
    buttonA.textContent = currentQuestion.A;
    buttonB.textContent = currentQuestion.B;
    buttonC.textContent = currentQuestion.C;
    buttonD.textContent = currentQuestion.D;
};


function checkAnswer (answer){
    rightwrong.setAttribute("style", "display:Block");
    //var text= document.createElement("text");
    rightwrong.appendChild(text);
   
    correct = quizQuestions[questionIndex].correctChoice;

    if (answer === correct && questionIndex !== quizLength ){
        text.textContent = "Correct!";
        console.log("Correct!");
        questionIndex++;
        score++;
        
    }else if(answer !== correct && questionIndex !== quizLength){
        text.textContent ="Incorrect!";
        console.log("Incorrect!");
        questionIndex++;
        timeRemaining = timeRemaining -10;
        countDown.textContent = "Time Remaining" + timeRemaining;

    }else{
        displayScore();
    }

    if (questionIndex !== quizLength){
        addQuizQuestions();
    }

};

function displayScore(){
    initialsEl.value= "";
    finalScore.textContent = "Your final score is " + score + " out of " + quizLength;
    
};


startButton.addEventListener("click", startQuiz);

submitScore.addEventListener("click", function highscoreEl(){
    highscoreElm.setAttribute("style", "display: block");

    if(initialsEl.value === ""){
        alert("Please enter initials");
        return false;
    }else{
        var listHighscores = JSON.parse(localStorage.getItem("listHighscores")) || [];
        var newName = initialsEl.value.trim();
        var newHighscore ={
            name : newName,
            score : score
        }
    }
    console.log(newHighscore);
    listHighscores.push(newHighscore);
    localStorage.setItem("listHighscores", JSON.stringify(listHighscores));
    generateHighscore();


  

});

function generateHighscore(){
    
    leaderNamesDisplay.textContent = "";
    leaderScoresDisplay.textContent ="";
    var highscores = JSON.parse(localStorage.getItem("listHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameInitials = document.createElement("li");
        newNameInitials.textContent = highscores[i].name + ":" + highscores[i].score;
        leaderNamesDisplay.appendChild(newNameInitials);
        
       
       
    }
  
  };

  clearDataBtn.addEventListener("click", clearData);
  
    function clearData(){
    localStorage.clear();
    leaderNamesDisplay.textContent ="";
    leaderScoresDisplay.textContent = "";
    };

playAgainBtn.addEventListener("click", function(){
    startScreen.style.display ="block";
    highscoreElm.setAttribute("style", "display: none");
    endGame.setAttribute("style", "display: none");
    timeRemaining = 60;
    countDown.textContent = "Time Remaining" + timeRemaining;
    score=0;
    questionIndex=0;
    localStorage.clear();
    text.textContent = "";
   
});