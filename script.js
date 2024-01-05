let currentQuestion = 0;
let score = 0;
let timer;

const questions = [
  
{
    question: "What is the key purpose of javascript?",
    options: ["Mainly styling and positioning","A way to add functionality to our webpages and applications","To add text to our webpages","To make video games"],
    correctAnswer: "A way to add functionality to our webpages and applications"
},
{
    question: "Which one of these is a javascript element?",
    options: ["div","body","header","function"],
    correctAnswer: "function"
},
{
    question: "How do we link javascript to our webpage?",
    options: ["With a link to a .css file in the head of our html file","It is automatically linked when we create our javascript file","It is automatically linked when placed in folder of webpage","With a link to a javascript file at the bottom of body element in html file"],
    correctAnswer: "With a link to a javascript file at the bottom of body element in html file"
},
{
    question: "What is an array used for in javascript",
    options: ["A way to store multiple groups of data in a single variable","A way to place items on a webpage in rows","A method to store our data ","To display a group of data"],
    correctAnswer: "A way to store multiple groups of data in a single variable"
},
{
    question: "A functions properties must be stored in:",
    options: ["Quotes","Round brackets","Square brackets","Curly brackets"],
    correctAnswer: "Curly brackets"
}
];

function startQuiz() {
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  showQuestion();
  startTimer();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const questionNumberElement = document.getElementById("question-number");

  const currentQuestionData = questions[currentQuestion];
  questionElement.textContent = currentQuestionData.question;
  questionNumberElement.textContent = currentQuestion + 1;

  optionsElement.innerHTML = "";

  currentQuestionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
    const currentQuestionData = questions[currentQuestion];
  
    if (answer === currentQuestionData.correctAnswer) {
      score++;
      updateScore();
    } else {
      decreaseTime();
    }
  
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function updateScore() {
    document.getElementById("score").textContent = score;
  }
  

function startTimer() {
  let timeLeft = 60;
  timer = setInterval(function () {
    document.getElementById("timer").textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      endQuiz();
    }
  }, 1000);
}
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      endQuiz();
    }
  }
  

function decreaseTime() {
  const timerElement = document.getElementById("timer");
  let timeLeft = parseInt(timerElement.textContent);
  timeLeft -= 5;
  timerElement.textContent = Math.max(0, timeLeft);
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById("quiz-container").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score}</p>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

