let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById
("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.getElementById("start.screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
    {
        id: "0",
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "javascript", "js", "scripting", "script",
            ],
            correct: "script",
        },
    {
        id: "1",
        question: "Where is the correct place to insert a JavaScript?",
        options: [
            "Both the <head> section and the <body> section are correct, The <body> section, The <head> section",
            ],
            correct: "Both the <head> section and the <body> section",
        },
    {
        id: "2",
        question: "The external JavaScript file must contain the <script> tag.",
        options: [
            "True, False",
            ],
            correct: "False"
        },
    {
        id: "3",
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction(), function:myFunction(), function = myFunction()",
            ],
            correct: "function = myFunction()",
        },
    {
                id: "4",
                question: "How do you call a function named myFunction?",
                options: [
                    "myFunction(), call myFunction(), call function = myFunction()",
                    ],
                    correct: "call myFunction()",
        },
        {
            id: "5",
            question: "How to write an IF statement in JavaScript?",
            options: [
                "if i = 5, if (i == 5), if i = 5 then, if i == 5 then",
                ],
                correct: "if i == 5 then",
    },
    {
        id: "6",
        question: "How does a FOR loop start?",
        options: [
            "for (i <= 5;i++, for i = 1 to 5, for(i = 0;i <=5), for (i = 0; i <=5;i++",
            ],
            correct: "for(i = 0;i <=5)",
    },
{
    id: "7",
    question: "How can you add a comment in a JavaScript?",
    options: [
        "<!--THIS IS A COMMENT-->, 'THIS IS A COMMENT, //THIS IS A COMMENT",
        ],
        correct: "//THIS IS A COMMENT",
    },
{
    id: "8",
    question: "How to insert a comment that has more than one line?",
    options: [
        "<!--This comment has more then one line-->, //This comment has more then one line//, /*This comment has more then one line*/",
        ],
        correct: "/*This comment has more then one line*/",
    },
{
    id: "9",
    question: "JavaScript is the same as Java.",
    options: [
        "True, False",
        ],
        correct: "False",
    },
];

restart.addEventListener("click",()=>{
    initial();
    displayContainer.classList.remove("hide");
    ServiceWorkerContainer.classList.add("hide")
});

nextBtn.addEventListener("click", (displayNext = () =>{
    questionCount += 1;

    if(questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide")
        userScore.innerHTML = " Your score is " +
        scoreCount + " out of " + questionCount;
    }
    else{
        countOfQuestion.innerHTML = questionCount + 1 +
        " of " + quizArray.length + "question";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
 })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = '${count}s';
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) =>{
    let quizCards = document.querySelectorAll("container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreator(){
    quizArray.sort(() => Math.random() - 0.5);

    for(let i of quizArray){
        i.options.sort(()=> Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + "of " +
        quizArray.length + "question";

        let question_div = document.createElement("p");
        question_div.classList.add("question");
        question_div.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="options-div" onclick="checker(this)">
        ${i.options[0]}</button>
        <button class="options-div" onclick="checker(this)">
        ${i.options[1]}</button>
        <button class="options-div" onclick="checker(this)">
        ${i.options[2]}</button>
        <button class="options-div" onclick="checker(this)">
        ${i.options[3]}</button>
        `;

        quizContainer.appendChild(div);
    }
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName
    ("container-mid")[questionCount];
    let options = question.querySelectorAll("option-div");

    if(userSolution === quizArray[questionCount]. correct) {
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");

        options.forEach((Element) => {
            if ((Element.innerText = quizArray[questionCount]. correct)) {
                Element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((Element) => {
        Element.disabled = true;
    });
}

    function initial(){
        quizContainer.innerHTML = "";
        questionCount = 0;
        scoreCount = 0;
        scoreCount = 0;
        count = 11;
        clearInterval(countdown);
        timerDisplay();
        quizCreator();
        quizDisplay(questionCount);
    }

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide")
    initial();
});

window.onload = () =>{
    startScreen.classList.remove("hide")
    displayContainer.classList.add("hide")

};