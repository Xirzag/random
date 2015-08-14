var screamer = document.createElement("img");
screamer.style.top = "0";
screamer.style.display = "none";
screamer.style.left = "0";
screamer.style.position = "fixed";
screamer.width = window.innerWidth;
screamer.height = window.innerHeight;
screamer.style.zIndex = "1000";
screamer.src = "https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/screamer.jpg";
//var drawInterval = setInterval(drawError(), 100);
var audio = new Audio('https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/screamer.mp3');

function doScreamer(e) {
	audio.play();
	screamer.style.display = "block";
	window.removeEventListener('mousemove',  doScreamer, false);
}

var screamerOn = true;

document.body.appendChild(screamer);
setTimeout(function(){
	document.body.addEventListener('keydown', function(e) {
    	console.log(e.keyCode);
		if (e.keyCode != "17" && screamerOn) doScreamer();
		else{
			screamerOn = false;
			window.removeEventListener('mousemove',  doScreamer, false);
		}
	});
	//document.body.onkeydown = function(){quitScreamer()};
	window.addEventListener('mousemove',  doScreamer, false);
	}, 3000);
