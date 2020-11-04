function main() {
    var canvas = document.getElementById('cv');
    var gl = getWebGLContext(canvas);
    console.log(gl);

    gl.clearColor(0, 0, 1, 0.5);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
