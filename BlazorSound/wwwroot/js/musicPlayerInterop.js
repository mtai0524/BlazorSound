// musicPlayerInterop.js
window.musicPlayerInterop = {
    playAudio: function (audioSrc) {
        var audioElement = document.querySelector("audio");
        if (audioElement) {
            audioElement.src = audioSrc;
            audioElement.play();
        }
    },
    getAudioDuration: function (audioSrc) {
        return new Promise((resolve) => {
            const audioElement = document.createElement('audio');
            audioElement.src = audioSrc;
            audioElement.onloadedmetadata = () => resolve(audioElement.duration);
        });
    },
    saveProgress: function (audioSrc, progress, duration) {
        localStorage.setItem(`progress_${audioSrc}`, progress);
        localStorage.setItem(`duration_${audioSrc}`, duration);
    },
    loadProgress: function (audioSrc) {
        const progress = localStorage.getItem(`progress_${audioSrc}`);
        const duration = localStorage.getItem(`duration_${audioSrc}`);
        return parseFloat(progress) / parseFloat(duration);
    },
    setAudioPosition: function (audioElementRef, position) {
        const audioElement = audioElementRef.current;
        if (audioElement) {
            audioElement.currentTime = position * audioElement.duration;
        }
    }
};
