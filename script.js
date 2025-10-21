const questionDatabase = {
    science: [
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                { text: "Go", correct: false },
                { text: "Au", correct: true },
                { text: "Gd", correct: false },
                { text: "Ag", correct: false }
            ]
        },
        {
            question: "How many bones are in the adult human body?",
            answers: [
                { text: "198", correct: false },
                { text: "206", correct: true },
                { text: "214", correct: false },
                { text: "220", correct: false }
            ]
        },
        {
            question: "What gas makes up about 78% of Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Hydrogen", correct: false }
            ]
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: [
                { text: "Gold", correct: false },
                { text: "Iron", correct: false },
                { text: "Diamond", correct: true },
                { text: "Platinum", correct: false }
            ]
        },
        {
            question: "What planet is known as the Red Planet?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false }
            ]
        },
        {
            question: "What is the speed of light in a vacuum?",
            answers: [
                { text: "300,000 km/s", correct: false },
                { text: "299,792,458 m/s", correct: true },
                { text: "150,000 km/s", correct: false },
                { text: "186,000 miles/s", correct: false }
            ]
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            answers: [
                { text: "1944", correct: false },
                { text: "1945", correct: true },
                { text: "1946", correct: false },
                { text: "1947", correct: false }
            ]
        },
        {
            question: "Who was the first person to walk on the moon?",
            answers: [
                { text: "Buzz Aldrin", correct: false },
                { text: "Neil Armstrong", correct: true },
                { text: "John Glenn", correct: false },
                { text: "Alan Shepard", correct: false }
            ]
        },
        {
            question: "Which ancient wonder of the world was located in Alexandria?",
            answers: [
                { text: "Hanging Gardens", correct: false },
                { text: "Colossus of Rhodes", correct: false },
                { text: "Lighthouse of Alexandria", correct: true },
                { text: "Temple of Artemis", correct: false }
            ]
        },
        {
            question: "Who painted the ceiling of the Sistine Chapel?",
            answers: [
                { text: "Leonardo da Vinci", correct: false },
                { text: "Raphael", correct: false },
                { text: "Michelangelo", correct: true },
                { text: "Donatello", correct: false }
            ]
        },
        {
            question: "The Berlin Wall fell in which year?",
            answers: [
                { text: "1987", correct: false },
                { text: "1989", correct: true },
                { text: "1991", correct: false },
                { text: "1993", correct: false }
            ]
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            answers: [
                { text: "Greek Empire", correct: false },
                { text: "Roman Empire", correct: true },
                { text: "Byzantine Empire", correct: false },
                { text: "Ottoman Empire", correct: false }
            ]
        }
    ],
    geography: [
        {
            question: "Which is the largest country by area?",
            answers: [
                { text: "China", correct: false },
                { text: "United States", correct: false },
                { text: "Canada", correct: false },
                { text: "Russia", correct: true }
            ]
        },
        {
            question: "What is the capital of Australia?",
            answers: [
                { text: "Sydney", correct: false },
                { text: "Melbourne", correct: false },
                { text: "Canberra", correct: true },
                { text: "Perth", correct: false }
            ]
        },
        {
            question: "Which river is the longest in the world?",
            answers: [
                { text: "Amazon", correct: false },
                { text: "Nile", correct: true },
                { text: "Mississippi", correct: false },
                { text: "Yangtze", correct: false }
            ]
        },
        {
            question: "Mount Everest is located on the border between which two countries?",
            answers: [
                { text: "India and China", correct: false },
                { text: "Nepal and China", correct: true },
                { text: "Nepal and India", correct: false },
                { text: "Bhutan and China", correct: false }
            ]
        },
        {
            question: "Which is the smallest country in the world?",
            answers: [
                { text: "Monaco", correct: false },
                { text: "Vatican City", correct: true },
                { text: "San Marino", correct: false },
                { text: "Liechtenstein", correct: false }
            ]
        },
        {
            question: "What is the largest desert in the world?",
            answers: [
                { text: "Sahara", correct: false },
                { text: "Gobi", correct: false },
                { text: "Antarctica", correct: true },
                { text: "Arabian", correct: false }
            ]
        }
    ],
    sports: [
        {
            question: "How many players are on a basketball team on the court at one time?",
            answers: [
                { text: "4", correct: false },
                { text: "5", correct: true },
                { text: "6", correct: false },
                { text: "7", correct: false }
            ]
        },
        {
            question: "In which sport would you perform a slam dunk?",
            answers: [
                { text: "Volleyball", correct: false },
                { text: "Basketball", correct: true },
                { text: "Tennis", correct: false },
                { text: "Baseball", correct: false }
            ]
        },
        {
            question: "How often are the Summer Olympic Games held?",
            answers: [
                { text: "Every 2 years", correct: false },
                { text: "Every 3 years", correct: false },
                { text: "Every 4 years", correct: true },
                { text: "Every 5 years", correct: false }
            ]
        },
        {
            question: "What is the maximum score possible in ten-pin bowling?",
            answers: [
                { text: "250", correct: false },
                { text: "300", correct: true },
                { text: "350", correct: false },
                { text: "400", correct: false }
            ]
        },
        {
            question: "In golf, what is the term for one stroke under par?",
            answers: [
                { text: "Eagle", correct: false },
                { text: "Birdie", correct: true },
                { text: "Albatross", correct: false },
                { text: "Bogey", correct: false }
            ]
        },
        {
            question: "Which country won the FIFA World Cup in 2018?",
            answers: [
                { text: "Brazil", correct: false },
                { text: "Germany", correct: false },
                { text: "France", correct: true },
                { text: "Argentina", correct: false }
            ]
        }
    ],
    entertainment: [
        {
            question: "Who directed the movie 'Jaws'?",
            answers: [
                { text: "George Lucas", correct: false },
                { text: "Steven Spielberg", correct: true },
                { text: "Martin Scorsese", correct: false },
                { text: "Francis Ford Coppola", correct: false }
            ]
        },
        {
            question: "Which movie won the Academy Award for Best Picture in 2020?",
            answers: [
                { text: "1917", correct: false },
                { text: "Joker", correct: false },
                { text: "Parasite", correct: true },
                { text: "Once Upon a Time in Hollywood", correct: false }
            ]
        },
        {
            question: "What is the highest-grossing film of all time?",
            answers: [
                { text: "Titanic", correct: false },
                { text: "Avatar", correct: true },
                { text: "Avengers: Endgame", correct: false },
                { text: "Star Wars: The Force Awakens", correct: false }
            ]
        },
        {
            question: "Who played the character of Jack Sparrow in Pirates of the Caribbean?",
            answers: [
                { text: "Orlando Bloom", correct: false },
                { text: "Johnny Depp", correct: true },
                { text: "Geoffrey Rush", correct: false },
                { text: "Keira Knightley", correct: false }
            ]
        },
        {
            question: "Which TV series features characters named Ross, Rachel, and Chandler?",
            answers: [
                { text: "Seinfeld", correct: false },
                { text: "Friends", correct: true },
                { text: "How I Met Your Mother", correct: false },
                { text: "The Big Bang Theory", correct: false }
            ]
        },
        {
            question: "What instrument did Yo-Yo Ma famously play?",
            answers: [
                { text: "Violin", correct: false },
                { text: "Piano", correct: false },
                { text: "Cello", correct: true },
                { text: "Flute", correct: false }
            ]
        }
    ],
    general: [
        {
            question: "Which is the largest animal in the world?",
            answers: [
                { text: "Shark", correct: false },
                { text: "Blue whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false }
            ]
        },
        {
            question: "What is the most spoken language in the world?",
            answers: [
                { text: "English", correct: false },
                { text: "Spanish", correct: false },
                { text: "Mandarin Chinese", correct: true },
                { text: "Hindi", correct: false }
            ]
        },
        {
            question: "How many sides does a hexagon have?",
            answers: [
                { text: "5", correct: false },
                { text: "6", correct: true },
                { text: "7", correct: false },
                { text: "8", correct: false }
            ]
        },
        {
            question: "What is the currency of Japan?",
            answers: [
                { text: "Won", correct: false },
                { text: "Yuan", correct: false },
                { text: "Yen", correct: true },
                { text: "Peso", correct: false }
            ]
        },
        {
            question: "Which organ in the human body produces insulin?",
            answers: [
                { text: "Liver", correct: false },
                { text: "Kidney", correct: false },
                { text: "Pancreas", correct: true },
                { text: "Heart", correct: false }
            ]
        },
        {
            question: "What does 'www' stand for in a website address?",
            answers: [
                { text: "World Wide Web", correct: true },
                { text: "World Wide Network", correct: false },
                { text: "World Web Wide", correct: false },
                { text: "Wide World Web", correct: false }
            ]
        }
    ]
};

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const highScoreElement = document.getElementById("high-score");
const categorySelection = document.getElementById("category-selection");
const quizContainer = document.getElementById("quiz-container");
const currentCategoryElement = document.getElementById("current-category");
const backToCategoriesBtn = document.getElementById("back-to-categories");
const categoryButtons = document.querySelectorAll(".category-btn");

// Game state variables
let currentCategory = '';
let availableQuestions = [];
let usedQuestionIndices = new Set();
let currentQuestionIndex = 0;
let score = 0;
let highScore = 0;
let timer;
let timeLeft = 15;
let questionsPerQuiz = 5;

// Category selection functions
function selectCategory(category) {
    currentCategory = category;
    availableQuestions = questionDatabase[category];
    usedQuestionIndices.clear();
    
    // Update UI
    categorySelection.style.display = 'none';
    quizContainer.style.display = 'block';
    currentCategoryElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    
    startQuiz();
}

function backToCategories() {
    clearInterval(timer);
    categorySelection.style.display = 'block';
    quizContainer.style.display = 'none';
}

function getRandomQuestion() {
    if (usedQuestionIndices.size >= availableQuestions.length) {
        usedQuestionIndices.clear();
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * availableQuestions.length);
    } while (usedQuestionIndices.has(randomIndex));
    
    usedQuestionIndices.add(randomIndex);
    return availableQuestions[randomIndex];
}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    
    let currentQuestion = getRandomQuestion();
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Shuffle answers for variety
    const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    startTimer();
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    clearInterval(timer);
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    const percentage = Math.round((score / questionsPerQuiz) * 100);
    questionElement.innerHTML = `
        <div class="score-display">
            <h3>Quiz Complete!</h3>
            <p>You scored <strong>${score} out of ${questionsPerQuiz}</strong> (${percentage}%)</p>
            <p>Category: <strong>${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</strong></p>
        </div>
    `;
    
    // Update high score per category
    const categoryKey = `${currentCategory}HighScore`;
    const categoryHighScore = localStorage.getItem(categoryKey) || 0;
    
    if (score > categoryHighScore) {
        localStorage.setItem(categoryKey, score);
    }
    
    // Update overall high score
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("quizHighScore", highScore);
        highScoreElement.innerHTML = `High Score: ${highScore}`;
    }

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questionsPerQuiz) {
        showQuestion();
    } else {
        showScore();
    }
}

function startTimer() {
    timeLeft = 15;
    timerElement.innerHTML = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            Array.from(answerButtons.children).forEach(button => {
                button.disabled = true;
            });
            nextButton.style.display = "block";
        }
    }, 1000);
}

function loadHighScore() {
    const storedHighScore = localStorage.getItem("quizHighScore");
    if (storedHighScore) {
        highScore = parseInt(storedHighScore);
    }
    highScoreElement.innerHTML = `High Score: ${highScore}`;
}

// Event listeners
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        selectCategory(category);
    });
});

backToCategoriesBtn.addEventListener('click', backToCategories);

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questionsPerQuiz) {
        handleNextButton();
    } else {
        // Reset for new quiz in same category
        startQuiz();
    }
});

// Initialize the app
function initializeApp() {
    loadHighScore();
    // Show category selection by default
    categorySelection.style.display = 'block';
    quizContainer.style.display = 'none';
}

initializeApp();
