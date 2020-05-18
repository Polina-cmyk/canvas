var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var color = '';
var marker = document.getElementById('marker');
var size = 1;


document.getElementById('color').oninput = function(){
    color = this.value;
    marker.style.background = this.value;
}

ctx.lineWidth = '';

ctx.lineCap = 'round';

document.getElementById('size').onchange = function() {
ctx.lineWidth = this.value;
marker.style.width = marker.style.height = ctx.lineWidth + 'px';
}
var brush1 = canvas.onmousedown = function(event){
    
    canvas.onmousemove = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        var dx = event.movementX;
        var dy = event.movementY;

        ctx.beginPath()
        ctx.moveTo(x, y);
        ctx.lineTo(x - dx, y - dy);
        ctx.stroke();
        ctx.closePath();

        ctx.strokeStyle = color;
    }

    canvas.onmouseup = function(){
        canvas.onmousemove = null;
    }

    console.log(this, event);
}


// document.getElementById('size').onchange = function() {
//     size = this.value;
//     marker.style.width = marker.style.height = size + 'px';
//     }

// canvas.onmousedown = function(){

//     canvas.onmousemove = function(event){
//         var x = event.offsetX;
//         var y = event.offsetY;

//         ctx.beginPath();
//         ctx.arc(x, y, size, 0, 2 * Math.PI);
//         ctx.stroke();
//         ctx.fill();
//         ctx.strokeStyle = color;
//         ctx.fillStyle = color;
//         ctx.closePath();

//         }
//         canvas.onmouseup = function(){
//             canvas.onmousemove = null;
//             }
// }


document.getElementById('clear').onclick = function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}




