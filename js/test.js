
window.onload = function () {
    var drawing = document.getElementById("drawing"),
        btn = document.getElementById("export-btn");

    //make sure <canvas> is completely supported
    if (drawing.getContext) {

        var context = drawing.getContext("2d"),
            fontSize = 50,
            i, len;

        //draw a red rectangle
        context.strokeWidth = 1;
        context.strokeStyle = "#000000";
        context.strokeRect(10, 10, 150, 30);

        //default font setting
        context.font = fontSize + "px Arial";
        context.textBaseline = "top";

        if (context.measureText) {
            while (context.measureText("Hello world!").width > 140) {
                fontSize--;
                context.font = fontSize + "px Arial";
            }

            //known to work in Firefox 4, not Chrome
            context.fillText("Hello world!", 10, 10, 50);
            context.fillText("Font size is " + fontSize + "px", 10, 50, 150);
        } else {
            alert("Your browser doesn't support the canvas text API.");
        }

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
