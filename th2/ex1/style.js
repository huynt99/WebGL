// vẽ hộp vuông
function maimaixa() {
    var getIdCanvas = document.getElementById('webgl');
    if (!getIdCanvas) {
        console.log("false");
        return;
    }
    var gl = getIdCanvas.getContext("2d");
    gl.fillStyle = "rgb(0,240,255)";
    gl.fillRect(120, 10, 150, 150);
}