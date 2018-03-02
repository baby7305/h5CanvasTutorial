
window.onload = function () {
    var drawing = document.getElementById("drawing"),
        btn = document.getElementById("export-btn");
    // <img id="smiley" src="images/smile.gif" border="1" title="Image tag" />

    //make sure <canvas> is completely supported
    if (drawing.getContext) {

        var context = drawing.getContext("2d"),
            image = document.images[0],
            imageData, data,
            i, len, average,
            red, green, blue, alpha;

        //draw regular size
        context.drawImage(image, 0, 0);

        //get the image data
        imageData = context.getImageData(0, 0, image.width, image.height);
        data = imageData.data;

        for (i = 0, len = data.length; i < len; i += 4) {

            red = data[i];
            green = data[i + 1];
            blue = data[i + 2];
            alpha = data[i + 3];

            //get the average of rgb
            average = Math.floor((red + green + blue) / 3);

            //set the colors, leave alpha alone
            data[i] = average;
            data[i + 1] = average;
            data[i + 2] = average;

        }

        //assign back to image data and display
        imageData.data = data;
        context.putImageData(imageData, 0, 0);
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
