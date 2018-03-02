document.write("Your browser " + (typeof ArrayBuffer != "undefined" ? "supports" : "doesn't support") + " typed arrays.");

window.onload = function () {
    var uint16s = new Uint16Array(10);
    uint16s[0] = 65537;
    alert(uint16s[0]);  //1
};