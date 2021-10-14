var  startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById ('question-container')
var questionTitle = document.getElementById('question-title')
var answerButtonElement = document.getElementById('answer-buttons')
var nextButton = document.getElementById('answer-buttons')
var currentQuestionIndex = 1
var startQuiz = document.getElementById("start-quiz")
startButton.addEventListener('click', startGame)

let button = document.getElementById('btn', function() {
    currentQuestionIndex++
    getNextQuestion()
})

function startGame() {
    console.log('started')
    startQuiz.style.display = "none"
    questionContainerElement.style.display = "block"
    getNextQuestion()
}

var timerEl=document.querySelector(".timer");

//file.vartimer = document.querySelector(".timer");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 20;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time left:" + secondsLeft;

    if(secondsLeft <= 0) {
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

setTime();


function getNextQuestion() {
   // put the question on the page!!!

   console.log ("Choices!! to put on page", questions[0].choice)
   
    questionTitle.innerText = questions[0].question

    for (let i = 0; i < questions[0].choice.length; i++) {
            console.log('i!!!!', i)
            console.log ("We are looping", questions[0].choice[i])

                //1 Make a piece of html make a button!!!
            // <button type ="button">Click Me!</button>
            var tag = document.createElement("button");
            console.log('I AM BUTTON',tag)
                //2 Dress that button up with the right text!!
            tag.textContent = questions[0].choice[i] 



                //3 append that button onto the page the <div id="answer-buttons"  !!!! add to that empty div already on html
            answerButtonElement.appendChild(tag)
    }
}

function showQuestion(question) {
    questionContainerElement.innerText = question.question
    
}



function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;
    if (answer === questions.answer[i]) {
        //Do this!!!
    } else {
        //Do this instead!!! 
     }

}


var questions = [
    {
        question: 'You are caring for a client with peptic ulcer disease. Which assessment finding is the most serious',
        choice: [
            'Projectile vomiting', 'Burning sensation 2 hour after eating', 'Coffee-ground emesis', 'Boardlike abdomen with shoulder pain'
            
        ],
        answer: 'Boardlike abdomen with shoulder pain'
           
    }, 
    {
        question: 'When a client is being prepared for a colonoscopy procedure,which task is most suitable to delegate to the UAP',
        choice: [
            'Explianing the need for a clear liquid diet 1 to 3 days before the procedure', 'Reinforcing NPO status 8 hours before the procedure', 'Administering laxatives 1 to 3 days before the procedure', 'Administering an enema the night before the procedure'
            
        ],
        answer: 'Reinforcing NPO status 8 hours before the procedure'
           
    }, 
    {
        question: 'You would be most concerned about an order for a tatal parenteral nutrition fat emulsion for a client with which condition',
        choice: [
            'Gastrointestinal obstruction', 'Severe anorexia nervosa', 'Chronic diarrhea and vomitng', 'Fractured femur'
            
        ],
       answer:'Fractured femur'
           
    }, 
    {
        question: 'For a patient receiving the chemotherapeutic drug Vincristine,which side effects should be reported to the physician',
        choice: [
            'Fatique', 'nausea and vomiting', 'Paresthesia', 'Anorexia'
            
        ],
        answer: 'Paresthesia'
           
    }, 
]