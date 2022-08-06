var startScreen = document.querySelector("#startscreen");
var startQuiz = document.querySelector("#startquiz");
var quizPage = document.querySelector("#quizpage");
var countDown = document.querySelector("#countdown");
var questionList = document.querySelector("#questionlist");
var buttonA = document.querySelector("#A");
var buttonB = document.querySelector("#B");
var buttonC = document.querySelector("#C");
var buttonD = document.querySelector("#D");

var questions[{
    question: "Where is the correct place to link your Javascript to your HTML document?",
    answerA: "Above your linked CSS",
    answerB: "Anywhere on the page",
    answerC: "In the head of the ducument",
    answerD: "In the body of the document",
    correctChoice: "D"
},
{
    question: "Which of the following is not used to declare a variable?",
    answerA: "const",
    answerB: "get",
    answerC: "var",
    answerD: "let",
    correctChoice: "B",
},
{
    question: "Which of the following do you use for strictly equal comparisons?",
    answerA: "===",
    answerB: "==",
    answerC: "=",
    answerD: "Any of these will work",
},
{
    question: "Which is the correct way to display text in an alert box?",
    answerA: "alertBox("")",
    answerB: "alert("")",
    answerC: "msg("")",
    answerD: "box("")",

},
{
    question: "Which of the following is the correct syntax of a FOR loop?",
    answerA: " for( i=0, i++ )",
    answerB: "for( i++, i<8, i=8 )",
    answerC: "for (i=0, I<=8 )",
    answerD: "for( i=0, i <=9, i++ )",
}];