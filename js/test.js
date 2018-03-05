function pageLoaded() {
    //Get a handle to the canvas project
    var canvas = document.getElementById("testcanvas");

    //Get the 2d context for this canvas
    var context = canvas.getContext("2d");

    //Our drawing code here
    context.fillStyle = "red";
    context.fillRect(310, 160, 100, 50);

    context.strokeStyle = "green";
    context.strokeRect(310, 240, 100, 50);

    context.fillStyle = "rgb(255,255,0)";
    context.fillRect(420, 160, 100, 50);

    context.fillStyle = "rgba(0,255,0,0.6)";
    context.fillRect(450, 180, 100, 50);

    var fireImage = document.getElementById("fire");
    var pattern = context.createPattern(fireImage, "repeat");

    context.fillStyle = pattern;
    context.fillRect(420, 240, 200, 200);




}
