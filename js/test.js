
window.onload = function () {
    var drawing = document.getElementById("drawing"),
        btn = document.getElementById("export-btn");

    //make sure <canvas> is completely supported
    if (drawing.getContext) {

        var context = drawing.getContext("2d"),
            gradient = context.createRadialGradient(55, 55, 10, 55, 55, 30);


        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "black");

        //draw a red rectangle
        context.fillStyle = "#ff0000";
        context.fillRect(10, 10, 50, 50);

        //draw a gradient rectangle
        context.fillStyle = gradient;
        context.fillRect(30, 30, 50, 50);
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
