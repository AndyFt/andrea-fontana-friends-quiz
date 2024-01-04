document.addEventListener('DOMContentLoaded', () => {

// DOM elements
let questionsContainer = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
let startScreen = document.getElementById("start-screen");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let startBtn = document.getElementById("start");
let submitBtn = document.getElementById("submit");
let initialsInput = document.getElementById("initials");



const questions = [
  {
    question: "What is the name of Phoebe's most famous song?",
    choices: ["Sweet Child of Mine", "Enemy", "Smelly Cat", "Smelly Fish"],
    correctAnswer: "Smelly Cat",
  },
  {
    question: "What is the name of the book that Joey keeps in the freezer?",
    choices: ["Surrounded by Idiots", "Little Women", "The Cat in the Hat", "A Street Cat Named Bob"],
    correctAnswer: "Little Women",
  },
  {
    question: "What does Ross famously scream when trying to help his friends move a couch?",
    choices: ["Hold on!", "Calm down!", "Fire in the hole!", "Pivot!"],
    correctAnswer: "Pivot!",
  },
  {
    question: "Chandler told Janice he was moving where to avoid her?",
    choices: ["Yemen", "Las Vegas", "Thailand", "Spain"],
    correctAnswer: "Yemen",
  },
  {
    question: "In the trivia game among the friends, what does Rachel think Chandler's job is?",
    choices: ["Accountant", "Statistical analysis and data reconfiguration", "Transponster", "Scientist"],
    correctAnswer: "Transponster",
  },
];

// Global Variables
let currentQuestionIndex = 0;
let timer;
let score = 0;
let timeLeft = 60;

// calls the page to load
// init();
document.addEventListener("DOMContentLoaded", init);


function init() {
  // start button click event
}

startBtn.addEventListener('click', startQuiz); 

// function to shuffle the questions order
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
}

// function to start the quiz
function startQuiz() {
  startScreen.classList.add("hide");
  
  shuffleQuestions(questions);

  questionsContainer.classList.remove("hide");
  
  displayQuestion(); //first question appears
  startTimer(); // Timer starts
}

// function to start the timer
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionTitle.textContent = currentQuestion.question;

  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", checkAnswer);
    choicesContainer.appendChild(button);
  });
}

//function to compare the answer and store it in the question's object
function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    //correct
    timeLeft += 10; //increase the score
    
    } else {
    //incorrect
    timeLeft -= 10; //decrease time as penalty
    }
  
    currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion(); //next question
  } else {
    endQuiz(); // end quiz
  }
}

// function to end the quiz
function endQuiz() {
  clearInterval(timer);

  questionsContainer.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.textContent = timeLeft;

}

submitBtn.addEventListener('click', () => {
  const initials = initialsInput.value.trim();
  const scoreData = {
    initials: initials,
    score: timeLeft
  }

  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(scoreData);
  highScores.sort((a, b) => b.score - a.score);
  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.href = 'highscores.html';
})

});