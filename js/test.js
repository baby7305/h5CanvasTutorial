function pageLoaded() {
    //Get a handle to the canvas project
    var canvas = document.getElementById("testcanvas");

    //Get the 2d context for this canvas
    var context = canvas.getContext("2d");

    //Our drawing code here
    var image = document.getElementById("spaceship");
    context.drawImage(image, 0, 350);
    context.drawImage(image, 0, 400, 100, 25);
    context.drawImage(image, 0, 0, 60, 50, 0, 420, 60, 50);

    context.translate(250, 370);
    context.rotate(Math.PI / 3);
    context.drawImage(image, 0, 0, 60, 50, -30, -25, 60, 50);

    context.rotate(-Math.PI / 3);
    context.translate(-240, -370);

    context.translate(300, 370);
    context.rotate(3 * Math.PI / 4);
    context.drawImage(image, 0, 0, 60, 50, -30, -25, 60, 50);

    context.rotate(-3 * Math.PI / 4);
    context.translate(-300, -370);








}
