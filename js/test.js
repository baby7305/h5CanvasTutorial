
window.onload = function () {
    var drawing = document.getElementById("drawing"),
        btn = document.getElementById("export-btn");
        // <img id="smiley" src="images/smile.gif" border="1" title="Image tag" />

    //make sure <canvas> is completely supported
    if (drawing.getContext){
            
        var context = drawing.getContext("2d");
        var image = document.getElementById("smiley");
        
        //draw regular size
        context.drawImage(image, 10, 10);
        
        //draw smaller
        context.drawImage(image, 50, 10, 20, 30);

        //draw just part of the image
        context.drawImage(image, 0, 10, 50, 50, 0, 100, 40, 60);

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
