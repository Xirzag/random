//To avoid some page in background
window.addEventListener('mousemove',  startScript);

function startScript() {
window.removeEventListener('mousemove',  startScript);
var cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';
var rules = document.createTextNode(
	'@keyframes surpriseDown {' +
		'from { bottom:-20%; }'+
		'to { bottom:0%; }'+
	'}' +
	'@keyframes surpriseUp {'+
		'from { top:-20%; }'+
		'to { top:0%; }'+
	'}' +
	'@keyframes surpriseLeft {'+
		'from { left:-20%; }'+
		'to { left:0%; }'+
	'}' +
	'@keyframes surpriseRight {'+
		'from { right:-20%; }'+
		'to { right:0%; }'+
	'}'
);
cssAnimation.appendChild(rules);
document.getElementsByTagName("head")[0].appendChild(cssAnimation);

function randomInt(min, max) {
	return Math.round(Math.random() * (max-min) + min)
}

var audio = new Audio('https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/surprise.mp3');
function doSurprise(from){
	audio.play();

	var img = document.createElement("img");

	img.style.position = "fixed";
	randomPos = randomInt(20, 75);
	
	switch(from) {
		case "down":
			img.style.bottom = "0%";
			img.style.height = "20%";
			img.style["animation-name"] = "surpriseDown"; 
			img.style["animation-duration"] = "1s";
			img.style.left = randomPos+"%";
			break;
		case "up":
			img.style.height = "20%";
			img.style.top = "0";
			img.style["animation-name"] = "surpriseUp"; 
			img.style["animation-duration"] = "1s";
			img.style.right = randomPos+"%";
			img.style.webkitTransform = "rotate(180deg)";
			break;
		case "left":
			img.style.width = "20%";
			img.style.top = randomPos+"%";
			img.style.left = "0";
			img.style["animation-name"] = "surpriseLeft"; 
			img.style["animation-duration"] = "1s";
			img.style.webkitTransform = "rotate(90deg)";
			break;
		case "right":
		default:
			img.style.width = "20%";
			img.style.top = randomPos+"%";
			img.style["animation-name"] = "surpriseRight"; 
			img.style["animation-duration"] = "1s";
			img.style.right = "0";
			img.style.webkitTransform = "rotate(270deg)";
			break;
	}
	img.style.index = "100000";
	img.src = "https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/surprise.gif";

	setTimeout(function(){document.body.appendChild(img);}, 500);
		
	setTimeout(function(){document.body.removeChild(img)}, 2000);
}

var direction = ["up", "down", "left", "right"];
/*
setInterval(function(){doSurprise(
							direction[parseInt(Math.random()*4)]
						)}, 2000);
						
*/
function randomSurprise(minTime, maxTime){
	doSurprise(direction[randomInt(0, 4)]);
	var interval = randomInt(minTime, maxTime);
	setTimeout(function(){randomSurprise(minTime,maxTime)},interval);
}

randomSurprise( 2000, 12000);				
}
