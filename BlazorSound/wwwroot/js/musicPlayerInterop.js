window.musicPlayerInterop = {
    playTimeIntervalId: null,

    getLocalStorage: function (key) {
        return localStorage.getItem(key);
    },

    setLocalStorage: function (key, value) {
        localStorage.setItem(key, value);
    },

    deletePlayTimeLocalStorage: function () {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("playTime_")) {
                localStorage.removeItem(key);
            }
        }
    },

    updatePlayTime: function (selectedFile) {
        var audio = document.getElementById('audioPlayerContainer');

        if (this.playTimeIntervalId) {
            clearInterval(this.playTimeIntervalId);
        }

        if (audio != null) {
            this.playTimeIntervalId = setInterval(function () {
                var currentTime = audio.currentTime;
                var storageKey = "playTime_" + selectedFile;
                musicPlayerInterop.setLocalStorage(storageKey, currentTime);
            }, 1000);
        }
    },

    playMusicFromSavedTime: function (selectedFile) {
        var savedTime = musicPlayerInterop.getLocalStorage("playTime_" + selectedFile);
        if (savedTime !== undefined && savedTime !== null) {
            var audio = document.getElementById('audioPlayerContainer');
            if (audio !== null) {
                audio.currentTime = parseFloat(savedTime);
            }
        }
    },
};
