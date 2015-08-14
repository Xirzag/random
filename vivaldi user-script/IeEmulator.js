var canvas = document.createElement("canvas");
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.position = "fixed";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.zIndex = "1000";
var context = canvas.getContext("2d");
var IEmage = new Image(); // XD
IEmage.src = "https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/ierror.jpg";
//var drawInterval = setInterval(drawError(), 100);

function drawError(e) {
	var mouseX = e.pageX - window.scrollX; 
	var mouseY = e.pageY - window.scrollY;
	context.drawImage(IEmage, mouseX, mouseY);
}
document.body.style.cursor = "none";

document.addEventListener('mousemove',  drawError, false);
document.body.appendChild(canvas);
