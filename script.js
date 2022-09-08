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
        a: [{ text: "The Joker", isCorrect: false },
        { text: "The Redhood", isCorrect: false },
        { text: "Bane", isCorrect: true },
        { text: "Deathstroke", isCorrect: false }
        ]
    },
    {
        id: 2,
        q: "How many realities did Dr.Strange go throught in Infinity War",
        a: [{ text: " 14,000,605", isCorrect: true },
        { text: "50,000,000", isCorrect: false },
        { text: "50", isCorrect: false },
        { text: "1,000,000,000", isCorrect: false }
        ]
    },
    {
        id: 3,
        q: "What is the name of batman's son",
        a: [{ text: "Jason Todd", isCorrect: false },
        { text: "Robin", isCorrect: false },
        { text: "Dick Grayson", isCorrect: false },
        { text: "Damian Wayne", isCorrect: true }
        ]
    },
    {
        id: 4,
        q: "Who is loki's brother",
        a: [{ text: "Satan", isCorrect: false },
        { text: "Iron Man", isCorrect: true },
        { text: "Dr.Strange", isCorrect: false },
        { text: "Thor", isCorrect: false }
        ]
    }
]

// start button var
var startBtn = document.getElementById('start-btn')
// start container
var startContainer = document.querySelector('.start-container')

var questionContainer = document.querySelector('.question-container')

var score = 0

var time = 100

// function to listen for start btn click to trigger quiz
startBtn.addEventListener('click', function () {
    // adding hidden class to container so button display is none
    startContainer.classList.add('hidden')
    showQuestionOne()
})


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

            showQuestionTwo()
        })
    }
}

function showQuestionTwo() {
    questionContainer.textContent = ""
    
}





















