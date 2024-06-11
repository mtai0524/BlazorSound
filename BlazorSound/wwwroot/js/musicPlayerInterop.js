window.musicPlayerInterop = {
    playTimeIntervalId: null,

    getCookie: function (name) {
        const value = '; ' + document.cookie;
        const parts = value.split('; ' + name + '=');
        if (parts.length === 2) return parts.pop().split(';').shift();
    },

    setCookie: function (name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    deletePlayTimeCookies: function () {
        const cookies = document.cookie.split("; ");
        cookies.forEach(cookie => {
            if (cookie.startsWith("playTime_")) {
                const cookieName = cookie.split("=")[0];
                document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        });
    },

    updatePlayTime: function (selectedFile) {
        var audio = document.getElementById('audioPlayerContainer');

        if (this.playTimeIntervalId) {
            clearInterval(this.playTimeIntervalId);
        }

        if (audio != null) {
            this.playTimeIntervalId = setInterval(function () {
                var currentTime = audio.currentTime;
                var cookieName = "playTime_" + selectedFile;
                musicPlayerInterop.setCookie(cookieName, currentTime, 7);
            }, 1000);
        }
    },

    playMusicFromSavedTime: function (selectedFile) {
        var savedTime = musicPlayerInterop.getCookie("playTime_" + selectedFile);
        if (savedTime !== undefined && savedTime !== null) {
            var audio = document.getElementById('audioPlayerContainer');
            if (audio !== null) {
                audio.currentTime = parseFloat(savedTime);
            }
        }
    },

};
