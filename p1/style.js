// vẽ hộp vuông
function maimaixa() {
    var getIdCanvas = document.getElementById('webgl');
    if (!getIdCanvas) {
        console.log("false");
        return;
    }
    var gl = getIdCanvas.getContext("2d");
    gl.fillStyle = "rgba(255, 0, 0, 1.0)";
    gl.fillRect(120,10,150,150);
}