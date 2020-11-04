var VSHADER_SOURCE =
    'void main(){\n' +
    ' gl_Position = vec4(0.9, -0.9, 0.0, 1);\n' +
    ' gl_PointSize = 30.0;\n' +
    '}\n';

var FSHADER_SOURCE =
    'void main(){\n' +
    'gl_FragColor = vec4(1, 1, 1, 1);\n' +
    '}\n';

function main() {
    var canvas = document.getElementById('cv');
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log(gl);
        return;
    }

    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    gl.clearColor(0, 0, 0, 0.5);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
}
