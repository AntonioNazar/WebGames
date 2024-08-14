let isMPaused = 0;
let music = document.getElementById('persona_song');
let iconMusic = document.getElementById('som');

let isVPaused = 0;
let video = document.getElementById('bg-video');
let iconVideo = document.getElementById('video');

let text = document.getElementById('decoder');

let answerDiv = document.getElementById('return');
let arrow_answer = document.getElementById("chat-arrow");
let answer = document.getElementById('answer');

function mute_unmute() {
    if (isMPaused === 0) {
        isMPaused = 1;
        music.pause();
        iconMusic.src = "src/assets/images/audio-mute.png";
    }
    else {
        isMPaused = 0;
        music.play();
        iconMusic.src = "src/assets/images/audio.png";
    }
}

function pause_continue() {
    if (isVPaused === 0) {
        isVPaused = 1;
        video.pause();
        iconVideo.src = "src/assets/images/video-pause.png";
    }
    else {
        isVPaused = 0;
        video.play();
        iconVideo.src = "src/assets/images/video.png";
    }
}

function encrypt() {
    text.value = text.value.toLowerCase();
    let chars = text.value.split("");
    let concatanate = '';
    for (let i = 0; i < chars.length; i++){
        if (chars[i]==='e') {
            chars[i] = "enter";
        
        }
        else if (chars[i]==='i') {
            chars[i] = "imes";
        }
        else if (chars[i]==='a') {
            chars[i] = "ai";
        }        
        else if (chars[i]==='o') {
            chars[i] = "ober";
        }
        else if (chars[i]==='u') {
            chars[i] = "ufat";
        }
        concatanate += chars[i];
    }

    answerDiv.style.visibility = "visible";
    arrow_answer.style.visibility = "visible"; 
    answer.innerHTML = concatanate;

}

function decrypt() {
    let chars = text.value;
    chars = chars.toLowerCase();
    chars = chars.replaceAll("enter", "e");
    chars = chars.replaceAll("imes", "i");
    chars = chars.replaceAll("ai", "a");
    chars = chars.replaceAll("ober", "o");
    chars = chars.replaceAll("ufat","u");
    answerDiv.style.visibility = "visible";
    arrow_answer.style.visibility = "visible"; 
    answer.innerHTML = chars;
}

function copy() {
    var copyText = answer.innerHTML;
    navigator.clipboard.writeText(copyText);
}