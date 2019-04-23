var panel = $("#quiz-area");

var countStartNumber = 30;

// Question set
var questions = [
    
    {
        question: "In S2E5: What is Jim's costume?",
        answers: ["Dave", "Bookface", "Three Hole Punch Jim", "Rational Consumer"],
        correctAnswer: "Three Hole Punch Jim",
        image: "Assets/jim lolol.gif"
    },

    {
        question: "In S1E2: What famous comedian's stand up routine does Michael imitate?",
        answers: ["Chris Rock", "Richard Pryor", "Robin Williams", "George Carlin"],
        correctAnswer: "Chris Rock",
        image: "Assets/michaellolol.gif"
    }


]

// Variable to hold our setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++)
        {
            panel.append("<button class='answer-button' id='button' data-name=' " +
            questions[this.currentQuestion].answer[i] +
            "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {
        
    }



}