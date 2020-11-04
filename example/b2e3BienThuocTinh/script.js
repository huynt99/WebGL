var VSHADER_SOURCE =
    ' attribute vec4 a_Position;\n' +
    'void main(){\n' +
    ' gl_Position = a_Position;\n' +
    ' gl_PointSize = 10.0;\n' +
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

    // var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

    if (a_Position < 0) {
        console.log('error postion');
        return;
    }

    gl.vertexAttrib3f(a_Position, 0, 0, 0);

    gl.clearColor(0, 0, 0, 0.5);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
}

function click(ev, gl, canvas, a_Position) {
    var x = ev.clientX;
    var y = ev.clientY;
    var rect = ev.target.getBoundingClientRect();

    x = ((x - rect.left) - canvas.width / 2) / (canvas.width / 2);
    y = ((canvas.height / 2) - (y - rect.top)) / (canvas.height / 2);
}