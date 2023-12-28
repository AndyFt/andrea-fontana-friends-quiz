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

// function to start the quiz
function startQuiz() {
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  displayQuestion(questions[currentQuestionIndex]); //first question appears
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
    score += 10; //increase the score
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

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again