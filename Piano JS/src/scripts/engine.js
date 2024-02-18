const pianoKeys = document.querySelectorAll(".piano-keys .key")

let audio = new Audio("./src/sounds/a.wav")

let mapedKeys= []

const volumeSlider = document.querySelector(".volume-slider input")

const keyCheck = document.querySelector(".keys-check input")

const playTune = (key) => {
    audio.src= `./src/sounds/${key}.wav`
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => 
        playTune(key.dataset.key),
        mapedKeys.push(key.dataset.key)
    )
})

document.addEventListener("keydown", (evento) => {
    if (mapedKeys.includes(evento.key)){
        playTune(evento.key)  
    }
})

const handleVolume = (evento) => {
    audio.volume = evento.target.value
}

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"))
}

    
volumeSlider.addEventListener("input", handleVolume)

keyCheck.addEventListener("click", showHideKeys)



