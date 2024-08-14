const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        time: document.querySelector("#time-value"),
        score: document.querySelector("#score-value"),
        timeLeft: document.querySelector("#time-value"),
        lives: document.querySelector("#live-value"),
    },
    values: {
        timerID: null,
        gameVelocity: 1000,
        hitPosition: 0,
        previousHitPosition: null,
        result: 0,
        currentTime: 60,
        livesLeft: 3,
    },
    actions: {
        countDownTimerID: setInterval(countDown,1000),
    }
}

function countDown() {
    state.values.currentTime--
    if (state.values.currentTime <= 0) {
        reset()
    }
    else {
        state.view.timeLeft.textContent = state.values.currentTime   
    }
}

function playSound(audioName) {
    let audio = new Audio(`/src/assets/sounds/${audioName}`)
    audio.volume = 0.1
    audio.play()
}

function moveEnemy() {
    state.values.timerID = setInterval(randomSquareEnemy, state.values.gameVelocity)
}

function randomSquareEnemy() {
    state.view.squares.forEach((square) =>{
        square.classList.remove("enemy")
    })
    
    let randomNumber = Math.floor(Math.random() * 9)
    while (randomNumber === state.values.previousHitPosition && state.values.previousHitPosition!==null) {
        randomNumber = Math.floor(Math.random() * 9)
    }
    let randomSquare = state.view.squares[randomNumber]
    randomSquare.classList.add("enemy")
    state.values.hitPosition = randomSquare.id
}

function addListernerHitbox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.previousHitPosition = state.values.hitPosition - 1 //diminuir 1 pq os ids são de 1 a 9
                state.values.hitPosition = null
                state.values.result++
                state.view.score.textContent = state.values.result
                playSound("Explosion.wav")
            }
            else if(square.id !== state.values.hitPosition){
                state.values.livesLeft--
                state.view.lives.textContent = state.values.livesLeft
                if (state.values.livesLeft <= 0) {
                    reset()
                    state.view.lives.textContent = state.values.livesLeft
                }
            }
        })
    })
}

function reset() {
    playSound("Randomize5.wav")
    alert("Game over! O seu resultado foi " + state.values.result)
    state.values.currentTime = 60
    state.view.timeLeft.textContent = state.values.currentTime
    state.values.result = 0
    state.view.score.textContent = state.values.result
    state.values.livesLeft = 3
    state.view.lives.textContent = state.values.livesLeft
}

function init() {
    moveEnemy()
    addListernerHitbox()
}

init()