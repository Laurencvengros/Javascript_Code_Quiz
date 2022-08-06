var startScreen = document.querySelector("#startscreen");
var startQuiz = document.querySelector("#startquiz");
var quizPage = document.querySelector("#quizpage");
var countDown = document.querySelector("#countdown");
var questionList = document.querySelector("#questionlist");
var buttonA = document.querySelector("#A");
var buttonB = document.querySelector("#B");
var buttonC = document.querySelector("#C");
var buttonD = document.querySelector("#D");
var endGame = document.querySelector("#endgame");
var answerChoice = document.querySelector("rightwrong");

var timeRemaining = 60;
var timeClock;
var QuestionIndex = 0;
var questionIndex = 0
var correctAnswer;
var score=0;



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

startScreen.addEventListener("click", function(){
    startScreen.setAttribute("style", "display:none");
    addQuizQuestions();
    timeClock =setInterval(function(){
        timeRemaining --;
        countDown.textContent = "Time Remaining" + timeRemaining;
    if(timeRemaining === 0){
        clearInterval(timeClock);
        finalScore();
    }
    }, 1000)
});

var QuizLength = quizQuestions.length

function addQuizQuestions(){
    quizpage.style.display = "block";
    var currentQuestion = quizQuestions[questionIndex];
    questionList.textContent = currentQuestion.question;
    buttonA.textContent = currentQuestion.A;
    buttonB.textContent = currentQuestion.B;
    buttonC.textContent = currentQuestion.C;
    buttonD.textContent = currentQuestion.D;
};


function checkAnswer(answer){
    correct = quizQuestions[questionIndex].correctChoice;

    if (answer === correct && questionIndex !== QuizLength){
        correct.textContent = "Correct!";
        questionIndex++;
        addQuizQuestions();
    }
};
