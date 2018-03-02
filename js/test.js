
window.onload = function () {
    var drawing = document.getElementById("drawing"),
        btn = document.getElementById("export-btn");

    //make sure <canvas> is completely supported
    if (drawing.getContext) {

        var context = drawing.getContext("2d");

        //start the path
        context.beginPath();
                
        //draw outer circle
        context.arc(100, 100, 99, 0, 2 * Math.PI, false);
        
        //draw inner circle
        context.moveTo(194, 100);
        context.arc(100, 100, 94, 0, 2 * Math.PI, false);
        
        //draw minute hand
        context.moveTo(100,100);
        context.lineTo(100, 15);
        
        //draw hour hand
        context.moveTo(100, 100);
        context.lineTo(35, 100);
        
        context.stroke();
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
