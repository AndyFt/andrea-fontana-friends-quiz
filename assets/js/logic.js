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
let totalTime = 60;

// Landing page:
  // Explanation of the quiz
  // Start button



// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

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