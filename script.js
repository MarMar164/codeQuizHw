//Questions That will be asked
const questions = [
    {
        id: 0,
        q: "What killed gwen stacy in classic Amzing Spider-man #122",
        a: ["the green goblin throwing her off a bridge", "Spideriman shooting out a web and catching her but snaping her neck", "Venom eating her", "the joker blowing her up"],
        c: "Spideriman shooting out a web and catching her but snaping her neck"
    },
    {
        id: 1,
        q: "In Batman:Knightfall who broke the bat",
        a: ["The Joker", "The Redhood", "Bane", "Deathstroke"],
        c: "Bane"
    },
    {
        id: 2,
        q: "How many realities did Dr.Strange go throught in Infinity War",
        a: [" 14,000,605", "50,000,000", "50",
            "1,000,000,000"
        ],
        c:" 14,000,605"
    },
    {
        id: 3,
        q: "What is the name of batman's son",
        a: ["Jason Todd", "Robin", "Dick Grayson", "Damian Wayne"
        ],
        c:"Damian Wayne"
    },
    {
        id: 4,
        q: "Who is loki's brother",
        a: ["Satan","Iron Man","Dr.Strange","Thor"
        ],
        c:"Thor"
    }
]

// start button var
var startBtn = document.getElementById('start-btn')
// start container
var startContainer = document.querySelector('.start-container')

var questionContainer = document.querySelector('.question-container')

var endContainer = document.querySelector('.end-quiz-container')

var timeContainer = document.querySelector('.time-container')

var questionIndex = 0

var score = 0

var time = 100

// function to listen for start btn click to trigger quiz
startBtn.addEventListener('click', function () {
    // adding hidden class to container so button display is none
    startContainer.classList.add('hidden')
    showQuestionOne()
    startTimer()
})

function startTimer() {
    timeContainer.textContent = time
    let timer = setInterval(() => {
        time--
        if (time === 0 || questionIndex === questions.length) {
            clearInterval(timer)
            endQuiz()
        }
        timeContainer.textContent = time


    }, 1000);
}


function showQuestionOne() {
    questionContainer.textContent = ""

    let question = document.createElement('h1')
    question.textContent = questions[0].q
    questionContainer.append(question)

    let answerContainer = document.createElement('div')
    questionContainer.append(answerContainer)

    for (let index = 0; index < questions[0].a.length; index++) {
        let answerBtn = document.createElement('button')
        answerBtn.textContent = questions[0].a[index]
        answerContainer.append(answerBtn)

        // checking if clicked button is the correct answer
        answerBtn.addEventListener('click', function (event) {
            let clicked = event.target.textContent

            if (clicked === questions[0].c) {
                score += 20
                console.log('correct');
            } else {
                time -= 20
                console.log('incorrect');
            }

            questionIndex++
            showQuestionTwo()
        })
    }
}

function showQuestionTwo() {
    questionContainer.textContent = ""

    let question = document.createElement('h1')
    question.textContent = questions[1].q
    questionContainer.append(question)

    let answerContainer = document.createElement('div')
    questionContainer.append(answerContainer)

    for (let index = 0; index < questions[1].a.length; index++) {
        let answerBtn = document.createElement('button')
        answerBtn.textContent = questions[1].a[index]
        answerContainer.append(answerBtn)

        // checking if clicked button is the correct answer
        answerBtn.addEventListener('click', function (event) {
            let clicked = event.target.textContent

            if (clicked === questions[1].c) {
                score += 20
                console.log('correct');
            } else {
                time -= 20
                console.log('incorrect');
            }

            questionIndex++
            showQuestionThree()
        })
    }
}

function showQuestionThree() {
    questionContainer.textContent = ""

    let question = document.createElement('h1')
    question.textContent = questions[2].q
    questionContainer.append(question)

    let answerContainer = document.createElement('div')
    questionContainer.append(answerContainer)

    for (let index = 0; index < questions[2].a.length; index++) {
        let answerBtn = document.createElement('button')
        answerBtn.textContent = questions[2].a[index]
        answerContainer.append(answerBtn)

        // checking if clicked button is the correct answer
        answerBtn.addEventListener('click', function (event) {
            let clicked = event.target.textContent

            if (clicked === questions[2].c) {
                score += 20
                console.log('correct');
            } else {
                time -= 20
                console.log('incorrect');
            }

            questionIndex++
            showQuestionFour()
        })
    }
}

function showQuestionFour() {
    questionContainer.textContent = ""

    let question = document.createElement('h1')
    question.textContent = questions[3].q
    questionContainer.append(question)

    let answerContainer = document.createElement('div')
    questionContainer.append(answerContainer)

    for (let index = 0; index < questions[3].a.length; index++) {
        let answerBtn = document.createElement('button')
        answerBtn.textContent = questions[3].a[index]
        answerContainer.append(answerBtn)

        // checking if clicked button is the correct answer
        answerBtn.addEventListener('click', function (event) {
            let clicked = event.target.textContent

            if (clicked === questions[3].c) {
                score += 20
                console.log('correct');
            } else {
                time -= 20
                console.log('incorrect');
            }

            questionIndex++
            showQuestionFive()
        })
    }
}

function showQuestionFive() {
    questionContainer.textContent = ""

    let question = document.createElement('h1')
    question.textContent = questions[4].q
    questionContainer.append(question)

    let answerContainer = document.createElement('div')
    questionContainer.append(answerContainer)

    for (let index = 0; index < questions[4].a.length; index++) {
        let answerBtn = document.createElement('button')
        answerBtn.textContent = questions[4].a[index]
        answerContainer.append(answerBtn)

        // checking if clicked button is the correct answer
        answerBtn.addEventListener('click', function (event) {
            let clicked = event.target.textContent

            if (clicked === questions[4].c) {
                score += 20
                console.log('correct');
            } else {
                time -= 20
                console.log('incorrect');
            }

            questionIndex++
            endQuiz()
        })
    }
}

function endQuiz() {
    questionContainer.classList.add('hidden')

    let input = document.createElement('input')
    input.setAttribute('placeholder', 'Name')

    let submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'

    submitBtn.addEventListener('click', function () {
        let name = input.value

        let user = {
            username: name,
            highscore: score
        }

        let storage = JSON.parse(localStorage.getItem('quizHighscore'))

        if (storage === null) {
            storage = []
        }

        storage.push(user)

        localStorage.setItem('quizHighscore', JSON.stringify(storage))

        window.location.href = 'highscore.html'

    })

    endContainer.append(input, submitBtn)
}





















