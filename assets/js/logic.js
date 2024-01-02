// Set of questions --> array of objects
// Each question needs the following:
  //! Question text
  //! Set of answers
  //! Which answer is correct

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


// start button click event
document.getElementById("start").addEventListener("click", startQuiz);

// submit button click event
document.getElementById("submit").addEventListener("click", submitScore);

// // call the function to shuffle the questions order
// document.getElementById("start").addEventListener("click", () => {
//   shuffleQuestions();
//   startQuiz();
// });

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
  document.getElementById("start-screen").classList.add("hide");

  shuffleQuestions(questions);

  document.getElementById("questions").classList.remove("hide");

  displayQuestion(); //first question appears
  startTimer(); // Timer starts
}

// function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  document.getElementById("question-title").textContent = currentQuestion.question;

  const choicesContainer = document.getElementById("choices");
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

// function to end the quiz
function endQuiz() {
  clearInterval(timer);

  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").textContent = timeLeft;
}

// function to submit the score
function submitScore() {
  const initials = document.getElementById("initials").value;
  const score = timeLeft;

  // check if localStorage is supported
  if (typeof Storage !== "undefined") {
    // retrieve existing high scores or initialize an empty array
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // add the current score to the array
    highScores.push({ initials, score });

    // sort the high scores in descending order
    highScores.sort((a, b) => b.score - a.score);

    // storage the updated high scores in localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  } else {
    // if localStorage is not supported, warn the user
    console.error("LocalStorage is not supported. Unable to save your high scores.");
  }

  // redirect to highscores page
  window.location.href = "highscores.html";

}


// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again