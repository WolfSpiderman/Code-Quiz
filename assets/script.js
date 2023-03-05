var root = document.querySelector('#root');
var startBtn = document.querySelector('#startBtn');
var question = document.querySelector('.question');
var btnA = document.querySelector('#ans1');
var btnB = document.querySelector('#ans2');
var btnC = document.querySelector('#ans3');
var btnD = document.querySelector('#ans4');
var button = document.querySelectorAll('.answers');
var ansSection = document.querySelector('.options');
var timerDisplay = document.querySelector('#timer');
var time = 90;
var result = document.querySelector('.result');
var countRight = 0;
var countWrong = 0;
var hiscore = 0;
var highscore= document.querySelector('#highscore');

var q1 = "What value type is fasle?";
var q1A = [
    q1a = "String",
    q1b = "Number",
    q1c = "Boolean",
    q1d = "Integer"
]; //answer = q1c, boolean

var q2 = "What do you call a variable with multiple properties assigned to it?";
var q2A = [
    q2a = "Object",
    q2b = "Array",
    q2c = "String",
    q2d = "Variable"
]; //answer = q2a, object

var q3 = "What character is used to refer to an HTML class in CSS or JavaScript?";
var q3A = [
    q3a = ".",
    q3b = "#",
    q3c = "$",
    q3d = "@"
] //answer = .

var q4 = "What tag is used for the part of the body that generally contains the title";
var q4A = [
    q4a = "Head",
    q4b = "Main",
    q4c = "Header",
    q4d = "Section"
] //answer = header

var q5 = "What would be best for executing certain code when a parameter is met?";
var q5A = [
    q5a = "For Loop",
    q5b = "A Function",
    q5c = "While Loop",
    q5d = "If Statement"
] // answer = if statement

var q6 = "What can be used to refer to where you currently are in the code?";
var q6A = [
    q6a = "Local",
    q6b = "Here",
    q6c = "This",
    q6d = "Current"
]; //answer = q6c, this

{
function highScore() {
    var hiInitial = localStorage.getItem("Name");
    var hiScore = localStorage.getItem("Hiscore");
    alert("The current highscore is held by " + hiInitial + " with a score of " + hiScore + ".");
}
    
highscore.addEventListener("click", highScore);    

function correct() {
    result.textContent = "Correct!";
    countRight++;
}

function wrong() {
    result.textContent = "Wrong!";
    countWrong++;
}

function answer6(event) {
    if (event.target === btnC) {
        correct();
    } else {
        wrong();
    }        
    // Final question executes extra code to collect and save data, and partially reset the game
    timerDisplay.style.display = "none";
    question.textContent = ("                 ");
    btnA.textContent = " ";
    btnB.textContent = " ";
    btnC.textContent = " ";
    btnD.textContent = " ";
    root.appendChild(startBtn);
    clearInterval(timer);
    ansSection.removeEventListener("click", answer6);
    alert("You answered all questions with " + countRight + " correct answers, and a remaining time of " + time + "!");
    var score = (time - (countWrong * 15));
    alert("You got " + countWrong + " answers wrong. Your final score is " + score + "!");
    hiscore = localStorage.getItem("Hiscore");
    if (score > hiscore) {
        localStorage.setItem("Hiscore", score);
        var initials = prompt("Please enter your initials.");
        localStorage.setItem("Name", initials);
    }
}

function question6() {
    question.textContent = ("Q6: " + q6);
    btnA.textContent = q6a;
    btnB.textContent = q6b;
    btnC.textContent = q6c;
    btnD.textContent = q6d;

    ansSection.addEventListener("click", answer6);
}

function answer5(event) {
    if (event.target === btnD) {
        correct();
    } else {
        wrong();
    }        
    question6();
    ansSection.removeEventListener("click", answer5);
}

function question5() {
    question.textContent = ("Q5: " + q5);
    btnA.textContent = q5a;
    btnB.textContent = q5b;
    btnC.textContent = q5c;
    btnD.textContent = q5d;

    ansSection.addEventListener("click", answer5);
}

function answer4(event) {
    if (event.target === btnC) {
        correct();
    } else {
        wrong();
    }        
    question5();
    ansSection.removeEventListener("click", answer4);
}

function question4() {
    question.textContent = ("Q4: " + q4);
    btnA.textContent = q4a;
    btnB.textContent = q4b;
    btnC.textContent = q4c;
    btnD.textContent = q4d;

    ansSection.addEventListener("click", answer4);
}

function answer3(event) {
    if (event.target === btnA) {
        correct();
    } else {
        wrong();
    }        
    question4();
    ansSection.removeEventListener("click", answer3);
}

function question3() {
    question.textContent = ("Q3: " + q3);
    btnA.textContent = q3a;
    btnB.textContent = q3b;
    btnC.textContent = q3c;
    btnD.textContent = q3d;

    ansSection.addEventListener("click", answer3);
}

function answer2(event) {
    if (event.target === btnA) {
        correct();
    } else {
        wrong();
    }        
    question3();
    ansSection.removeEventListener("click", answer2);
}

function question2() {
    question.textContent = ("Q2: " + q2);
    btnA.textContent = q2a;
    btnB.textContent = q2b;
    btnC.textContent = q2c;
    btnD.textContent = q2d;

    ansSection.addEventListener("click", answer2);
}

function answer1(event) {
    if (event.target === btnC) {
        correct();
    } else {
        wrong();
    }        
    question2();
    ansSection.removeEventListener("click", answer1);
}

function question1() {
    startTimer();
    question.textContent = ("Q1: " + q1);
    btnA.textContent = q1a;
    btnB.textContent = q1b;
    btnC.textContent = q1c;
    btnD.textContent = q1d;

    ansSection.addEventListener("click", answer1);
}

function startQuiz(event) {
    event.preventDefault;
    root.removeChild(startBtn);
    result.textContent = " ";
    countRight = 0;
    countWrong = 0;
    question1();
}

function loseGame() {
    if (timerDisplay.style.display !== "none") {
        alert("Time is up. Better luck next time.");
        question.textContent = ("                 ");
    btnA.textContent = " ";
    btnB.textContent = " ";
    btnC.textContent = " ";
    btnD.textContent = " ";
    }
}

function startTimer() {
    timerDisplay.style.display = "block";
    time = 90;
    var timer = setInterval(function() {
      time--;
      timeScore = (time - (countWrong * 15));
      timerDisplay.textContent = timeScore;
      if (timeScore === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
}
}
startBtn.addEventListener("click", startQuiz);
