var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
var strArr = '010101010101101101110000110'.split('');
var Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(Arr);
var rain = function () {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    Arr.forEach(function (item, index) {
        ctx.fillText(strArr[Math.floor(Math.random() * strArr.length)], index * 10, item + 10);
        Arr[index] = item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
};
setInterval(rain, 40);
