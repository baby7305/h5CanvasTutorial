
window.onload = function () {
    var drawing = document.getElementById("drawing"),
        btn = document.getElementById("export-btn");
    // <img id="smiley" src="images/smile.gif" border="1" title="Image tag" />

    //make sure <canvas> is completely supported
    if (drawing.getContext) {

        var context = drawing.getContext("2d"),
            image = document.images[0],
            pattern = context.createPattern(image, "repeat");

        //draw a rectangle
        context.fillStyle = pattern;
        context.fillRect(10, 10, 150, 150);

    }

    btn.onclick = function () {
        //get data URI of the image
        var imgURI = drawing.toDataURL();

        //display the image
        var image = document.createElement("img");
        image.src = imgURI;
        document.body.appendChild(image);

    };
};
