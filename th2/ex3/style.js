// vẽ 1 điểm
var VSHADER_SOURCE =
    'attribute vec4 a_PointSize;\n' +
    'void main() {\n' +
    '  gl_Position = vec4(0.9, -0.9, 0.0, 1.0);\n' +
    '  gl_PointSize = a_PointSize;\n' +
    '}\n';

var FSHADER_SOURCE =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

function main() {
    var canvas = document.getElementById("ex3");
    let a_PointSize = document.getElementById("glSize")
    if (!canvas) {
        console.log("false");
    }
    var gl = getWebGLContext(canvas);

    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
}

