var userPick = [];
var correctAnswers = 0;
var wrongAnswers = 0;
var missedAnswers = 0;
var timeDisplay;
var counter = 31;
var intervalID;
var questionsArray = [
    {
        question: "Is the sky blue?",
        answers: ["yes", "no", "it's green!"],
        rightAnswer: 0
    },
    {
        question: "What is the world's largest island?",
        answers: ["Greenland", "Iceland", "uknown"],
        rightAnswer: 0

    },
    {
        question: "What is the worlds largest ocean?",
        answers: ["Atlantic", "Pacific", " Artic"],
        rightAnswer: 1
    }
]

for (var i = 0; i < questionsArray.length; i++) {
    userPick[i] = null;

}
$("#startGame").click(function () {
    
    intervalID = setInterval(decrement, 1000);
    writeQuestions();
    $("#startGame").hide();
    writeSubmitButton();
});
$("#submitQuiz").click(function () {
    alert("Show the answers!")
    showResults();

});
$("input").click(function () {
    userPick[this.name] = this.value;
});
function writeQuestions() {
    for (var i = 0; i < questionsArray.length; i++) {
        $("#formQuiz").append(questionsArray[i].question + "<br>");
        for (var x = 0; x < questionsArray[i].answers.length; x++) {
            $("#formQuiz").append("<label class='radio-inline'><input value='" + x + "' type='radio' name='" + i + "'>" + questionsArray[i].answers[x] + "</label>");
        }

        $("#formQuiz").append("<br/><br/>");
    }
}


function writeSubmitButton() {
    $("#formSubmit").append("<button id='submitQuiz' class='btn btn-primary btn-lg'>Submit</button>");
}


        function decrement() {
           
            counter--;
            $("#timeRemaining").html("<h2><mark>" + counter + " seconds remaining.</mark></h2>");
            if (counter === 0) {
               stop();
                showResults();
            }
        }
        //Write the results to the HTML
        function showResults() {
            //Hide the questions | options | and submit button
            $("#formQuiz").hide();
            $("#timeRemaining").hide();
            $("#submitQuiz").hide();

            for (i = 0; i < questionsArray.length; i++) {
                if (questionsArray[i].rightAnswers === userPick[i]) {
                    correctAnswers++;
                }
            
                else if (userPick[i] === null) {
                    missedAnswers++;
                }
            
                else {
                    wrongAnswers++;
                }
            }
            var qR = $("#quizResults");
            $(qR).append("<p>ALL DONE!</p>");
            $(qR).append("<p>Correct Answers: " + correctAnswers + "</p>");
            $(qR).append("<p>Incorrect Answers: " + wrongAnswers + "</p>");
            $(qR).append("<p>Unanswered: " + missedAnswers + "</p>");
            //You must clear intervalID or it will repeat
            clearInterval(intervalID);
        }

