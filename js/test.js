document.write("Your browser " + (typeof ArrayBuffer != "undefined" ? "supports" : "doesn't support") + " typed arrays.");

window.onload = function () {
    var buffer = new ArrayBuffer(20),
        view = new DataView(buffer),
        value;

    view.setUint16(0, 25);
    value = view.getInt8(0);

    alert(value);    //0
};