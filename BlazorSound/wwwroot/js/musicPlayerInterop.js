// musicPlayerInterop.js
window.musicPlayerInterop = {
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
   updatePlayTime: function () {
       var audio = document.getElementById('audioPlayerContainer');
       if (audio != null) {
           audio.addEventListener('loadedmetadata', function () {
               setInterval(function () {
                   var currentTime = audio.currentTime;
                   var cookieName = "playTime_";
                   musicPlayerInterop.setCookie(cookieName, currentTime, 7);
               }, 100);
           });
       }
    },

};
