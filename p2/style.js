// vẽ nền đen canvas
function main() {
    var canvas = document.getElementById("p2");
    if (!canvas){
        console.log("false");
    }
    var gl = getWebGLContext(canvas);

    gl.clearColor(0.0, 0.0,0.0 ,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}