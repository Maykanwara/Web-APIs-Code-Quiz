var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionTitle = document.getElementById("question-title");
var answerButtonElement = document.getElementById("answer-buttons");
var nextButton = document.getElementById("answer-buttons");
var currentQuestionIndex = 0;
var startQuiz = document.getElementById("start-quiz");
startButton.addEventListener("click", startGame);
var endQuiz = document.getElementById("end-quiz");

var viewScore = document.getElementById("score-button")

function startGame() {
  setTime();
  startQuiz.style.display = "none";
  questionContainerElement.style.display = "block";
  getNextQuestion();
}

var timerEl = document.querySelector(".timer");

//file.vartimer = document.querySelector(".timer");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 100;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time left:" + secondsLeft;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image

      sendMessage();
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timerEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

function handleClick() {
  console.log(this.innerText);
  if (this.innerText !== questions[currentQuestionIndex].answer) {
    secondsLeft -= 15;
  }

  answerButtonElement.innerText = "";
  currentQuestionIndex++;
  console.log(questions[currentQuestionIndex]);
  if (!questions[currentQuestionIndex]) {
    questionContainerElement.style.display = "none";
    endQuiz.style.display = "block";
  }
  getNextQuestion();
}

function getNextQuestion() {
  // put the question on the page!!!

  questionTitle.innerText = questions[currentQuestionIndex].question;

  for (let i = 0; i < questions[currentQuestionIndex].choice.length; i++) {
    //1 Make a piece of html make a button!!!
    // <button type ="button">Click Me!</button>
    var tag = document.createElement("button");

    //2 Dress that button up with the right text!!
    tag.textContent = questions[currentQuestionIndex].choice[i];

    tag.onclick = handleClick;

    //3 append that button onto the page the <div id="answer-buttons"  !!!! add to that empty div already on html
    answerButtonElement.appendChild(tag);
  }
}

function showQuestion(question) {
  questionContainerElement.innerText = question.question;
}
viewScore.addEventListener("click",function(){
    console.log("we reach the end of the quiz")
})

function checkAnswer(answer) {
  correct = quizQuestions[currentQuestionIndex].correctAnswer;
  if (answer === questions.answer[i]) {
    //Do this!!!
  } else {
    //Do this instead!!!
  }
}

var questions = [
  {
    question:
      "You are caring for a client with peptic ulcer disease. Which assessment finding is the most serious",
    choice: [
      "Projectile vomiting",
      "Burning sensation 2 hour after eating",
      "Coffee-ground emesis",
      "Boardlike abdomen with shoulder pain",
    ],
    answer: "Boardlike abdomen with shoulder pain",
  },
  {
    question:
      "When a client is being prepared for a colonoscopy procedure,which task is most suitable to delegate to the UAP",
    choice: [
      "Explianing the need for a clear liquid diet 1 to 3 days before the procedure",
      "Reinforcing NPO status 8 hours before the procedure",
      "Administering laxatives 1 to 3 days before the procedure",
      "Administering an enema the night before the procedure",
    ],
    answer: "Reinforcing NPO status 8 hours before the procedure",
  },
  {
    question:
      "You would be most concerned about an order for a tatal parenteral nutrition fat emulsion for a client with which condition",
    choice: [
      "Gastrointestinal obstruction",
      "Severe anorexia nervosa",
      "Chronic diarrhea and vomitng",
      "Fractured femur",
    ],
    answer: "Fractured femur",
  },
  {
    question:
      "For a patient receiving the chemotherapeutic drug Vincristine,which side effects should be reported to the physician",
    choice: ["Fatique", "nausea and vomiting", "Paresthesia", "Anorexia"],
    answer: "Paresthesia",
  },
];

//saveHighScore = e => {
//console.log(clicked the save button!");
//
