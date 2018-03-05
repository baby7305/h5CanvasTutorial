function pageLoaded() {
    //Get a handle to the canvas project
    var canvas = document.getElementById("testcanvas");

    //Get the 2d context for this canvas
    var context = canvas.getContext("2d");

    //Our drawing code here
    context.beginPath();
    context.moveTo(10, 120);
    context.lineTo(10, 180);
    context.lineTo(110, 150);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(140, 160);
    context.lineTo(140, 220);
    context.lineTo(40, 190);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(160, 160);
    context.lineTo(170, 220);
    context.lineTo(240, 210);
    context.lineTo(260, 170);
    context.lineTo(190, 140);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.arc(100, 300, 40, 0, Math.PI, true);
    context.stroke();

    context.beginPath();
    context.arc(100, 300, 30, 0, 2 * Math.PI, true);
    context.fill();

    context.beginPath();
    context.arc(300, 300, 25, 0, 3 / 2 * Math.PI, false);
    context.stroke();

}
