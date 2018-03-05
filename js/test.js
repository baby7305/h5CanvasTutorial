function pageLoaded() {
    //Get a handle to the canvas project
    var canvas = document.getElementById("testcanvas");

    //Get the 2d context for this canvas
    var context = canvas.getContext("2d");

    //Our drawing code here
    context.fillText("This is some text...", 330, 40);
    context.font = "10pt Arial";
    context.fillText("This is in 10pt Arial", 330, 60);
    context.font = "16pt Arial";
    context.strokeText("This is stroked in 16pt Arial....", 330, 80);

}
