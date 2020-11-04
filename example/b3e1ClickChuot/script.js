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
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('error postion');
        return;
    }
    // gl.vertexAttrib3f(a_Position, 0, 0, 0);

    canvas.onmousedown = function (ev) {
        click(ev, gl, canvas, a_Position)
    };

    gl.clearColor(0, 0, 0, 0.5);
    gl.clear(gl.COLOR_BUFFER_BIT);
    // gl.drawArrays(gl.POINTS, 0, 1);
}

var g_points = [];

function click(ev, gl, canvas, a_Position) {
    var x = ev.clientX;
    var y = ev.clientY;
    var rect = ev.target.getBoundingClientRect();

    x = ((x - rect.left) - canvas.width / 2) / (canvas.width / 2);
    y = ((canvas.height / 2) - (y - rect.top)) / (canvas.height / 2);
    g_points.push(x);
    g_points.push(y);
    gl.clear(gl.COLOR_BUFFER_BIT); // xóa canvans để lấy click mới

    var leng = g_points.length;
    for (var i = 0; i < leng; i += 2) {
        console.log(g_points[i]);
        gl.vertexAttrib3f(a_Position, g_points[i], g_points[i + 1], 0.0);
        gl.drawArrays(gl.POINTS, 0, 1);
        if (i >= 8) { // xử lý click 5 lần in ra màu vàng
            gl.clearColor(1, 1, 0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            g_points = [];
            return;
        }
    }
}