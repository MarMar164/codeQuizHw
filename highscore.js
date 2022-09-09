let highscoreContainer = document.querySelector('.highscore-container')

let storage = JSON.parse(localStorage.getItem('quizHighscore'))


if (storage === null) {
    highscoreContainer.textContent = 'No Highscores'
} else {
    highscoreContainer.textContent = ''

    for (let index = 0; index < storage.length; index++) {
        const p = document.createElement('p')
        p.textContent = 'Username: ' + storage[index].username + " -------- Score: " + storage[index].highscore
        highscoreContainer.append(p)
    }
}