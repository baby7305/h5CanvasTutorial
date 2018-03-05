function pageLoaded() {
    //Get a handle to the canvas project
    var canvas = document.getElementById("testcanvas");

    //Get the 2d context for this canvas
    var context = canvas.getContext("2d");

    //Our drawing code here
    var audio1 = document.getElementById("audio");
    var mp3Support, oggSupport;

    if (audio1.canPlayType) {
        mp3Support = "" !== audio1.canPlayType("audio/mpeg");
        oggSupport = "" !== audio1.canPlayType("audio/ogg;codecs=\"vorbis\"");
    } else {
        mp3Support = false;
        oggSupport = false;
    }

    var soundFileExtn = oggSupport ? ".ogg" : mp3Support ? ".mp3" : undefined;
    if (soundFileExtn) {
        var sound = new Audio();

        sound.addEventListener("canplaythrough", function () {
            sound.play();
        })
        sound.src = "audios/bullet1" + soundFileExtn;
    }







}
