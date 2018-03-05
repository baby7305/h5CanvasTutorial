function pageLoaded() {
    //Get a handle to the canvas project
    var canvas = document.getElementById("testcanvas");

    //Get the 2d context for this canvas
    var context = canvas.getContext("2d");

    //Our drawing code here
    var image = new Image();
    image.src = "images/spaceship.png";

    image.onload = function () {
        alert("Image finished loading");
    };
}
