// musicPlayerInterop.js
window.musicPlayerInterop = {
    playAudio: function (audioSrc) {
        var audioElement = document.querySelector("audio");
        if (audioElement) {
            audioElement.src = audioSrc;
            audioElement.play();
        }
    }
};