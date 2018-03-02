document.write("Your browser " + (typeof ArrayBuffer != "undefined" ? "supports" : "doesn't support") + " typed arrays.");

window.onload = function () {
    var buffer = new ArrayBuffer(20),
        view = new DataView(buffer),
        value;

    view.setUint16(0, 25);
    view.setUint16(2, 50);   //don't start at 1, 16-bit integers take two bytes
    value = view.getUint16(0);

    alert(value);
};