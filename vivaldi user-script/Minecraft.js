//Is a old code...
function makeCSS(){
	var css = '\
	.tierra{\
		transition:all 1.5s ease-out;\
		position:fixed;\
		background-size:cover;\
		z-index:997;\
	}\
	#mundo{\
		position: absolute;\
		top: 0;\
		left: 0;\
		right: 0;\
		bottom: 0;\
		z-index: 999;\
	}\
		';
	style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}
	document.head.appendChild(style);
}

makeCSS();
var mundo = document.createElement("div");
document.body.appendChild(mundo);

var nBlocks = 20;
var altLim = 3;
var blockX = window.innerWidth/nBlocks;
var altMax = Math.floor(window.innerHeight/blockX);
//To avoid some page in background
window.addEventListener('mousemove',  startScript);

function startScript() {
window.removeEventListener('mousemove',  startScript);

var altura = Math.floor(altMax/2);
//alert(altura+" "+altMax+" "+blockX);
for(var i = 0; i < nBlocks; i++){
	if(altura>2 && altura<altMax-altLim){
		altura += getRandom(-1.6, 1.6); //Normal
	}else if(altura<=2 ){
		altura += getRandom(1, 1.8); //Por abajo	
	}else{
		altura += getRandom(-1, -1.8); //Por arriba
	}
	//alert("MEC");
	for(var j=altMax; j > altMax-altura; j--){
		var b = document.createElement("div");
		b.style.width = blockX+"px";
		b.style.height = blockX+"px";
		b.style.left = i*blockX+"px";
		b.style.top = ((j-altMax-1)*blockX)+"px";
		//blocks[i*nBlocks+j]=j*blockX;
		b.classList.add('tierra');
		if(j==altMax-altura+1){
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/grass.jpg)";
			if(getRandom(0,2)==1){
					grass(i*blockX, (j-altMax-1)*blockX-blockX);
			}
		}else{
			if(getRandom(0,-altMax+altura+j)<altMax/9){
				b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/pack_3530346.jpg)";
			}else{
				switch (getRandom(0,100)){
					case 0:
						b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/diamond.bmp)";
						b.addEventListener("click", function(){
							this.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/minecraft_stone.jpg)";
							itemDrop(this.style.left, this.style.top, "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Diamond_Gem.png)");
							this.removeEventListener('click', arguments.callee, false);
							}, false);
						break;
					case 1:
					case 2:
						b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/gold.png)";
						b.addEventListener("click", function(){
							this.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/minecraft_stone.jpg)";
							itemDrop(this.style.left, this.style.top, "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Golditm.png)");
							this.removeEventListener('click', arguments.callee, false);
							}, false);
						break;
					case 3:
					case 4:
					case 5:
					case 6:
						b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/minecraft_iron.jpg)";
						b.addEventListener("click", function(){
							this.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/minecraft_stone.jpg)";
							itemDrop(this.style.left, this.style.top, "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/120px-Ironitm.png)");
							this.removeEventListener('click', arguments.callee, false);
							}, false);
						break;
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
						b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/minecraft_coal.jpg)";
						b.addEventListener("click", function(){
							this.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/minecraft_stone.jpg)";
							itemDrop(this.style.left, this.style.top, "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Coal1.png)");
							this.removeEventListener('click', arguments.callee, false);
							}, false);
						break;
					case 14:
					case 13:
						b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/redstone.png)";
						b.addEventListener("click", function(){
							this.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/minecraft_stone.jpg)";
							itemDrop(this.style.left, this.style.top, "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Redstone_Dust.png)");
							setTimeout("itemDrop('"+this.style.left+"', '"+this.style.top+"', 'url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Redstone_Dust.png)')",200);
							setTimeout("itemDrop('"+this.style.left+"', '"+this.style.top+"', 'url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Redstone_Dust.png)')",380);
							setTimeout("itemDrop('"+this.style.left+"', '"+this.style.top+"', 'url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Redstone_Dust.png)')",500);
							//this.removeEventListener('click', arguments.callee, false);
							}, false);
						break;
					default:
						b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/minecraft_stone.jpg)";
				}
			}
			
		}
		mundo.appendChild(b);
		
	}
}
var tierra = document.getElementsByClassName("tierra");
setTimeout("caer(0,tierra)",100);

function grass(x, y){
	var b = document.createElement("div");
	b.style.width = blockX+"px";
	b.style.height = blockX+"px";
	b.style.left = x+"px";
	b.style.top = y+"px";
	switch(getRandom(0,9)){
		case 1:
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Rose.png)";
			break;	
		case 2:
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Allium.png)";
			break;	
		case 3:
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Blue_Orchid.png)";
			break;	
		case 4:
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Cyan_Flower.png)";
			break;	
		case 5:
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Dandelion.png)";
			break;
		case 6:
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Grid_Azure_Bluet.png)";
			break;	
		case 7:
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/Red_Tulip.png)";
			break;	
		default:
			b.style.backgroundImage = "url(https://raw.githubusercontent.com/Xirzag/random/master/vivaldi-Images/tall_grass.png)";
			break;			
	}
	b.classList.add('tierra');
	b.id = "grass";
	mundo.appendChild(b);	
}

function caer(n, tierra){
		if(n>=tierra.length){
			return;	
		}
		tierra.item(n).style.transform="translate(0%, "+window.innerHeight+"px)";
		tierra.item(n).style.webkitTransform="translate(0px, "+window.innerHeight+"px)";
		setTimeout("caer("+(n+1)+",tierra)",25);
}

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var itemN = 0;

function itemDrop(x, y, bg){
	var b = document.createElement("div");
	b.style.width = blockX+"px";
	b.style.height = blockX+"px";
	b.style.left = x;
	b.style.top = (parseFloat(y)+window.innerHeight)+"px";
	b.style.position = "fixed";
	b.style.backgroundImage = bg;
	b.style.backgroundSize = "cover";
	b.style.zIndex = 998;
	b.style.transition = "all 0.7s ease-in-out";
	//b.style.transitionProperty = "all";
	//b.style.transitionDuration = "2s";
	b.id = "item"+itemN;
	mundo.appendChild(b);
	setTimeout("document.getElementById('item"+itemN+"').style.transform = 'rotateY(180deg) translate(0px,-"+6*blockX+"px)';\
	document.getElementById('item"+itemN+"').style.webkitTransform = 'rotateY(180deg) translate(0px,-"+6*blockX+"px)';",10);
  setTimeout("document.getElementById('item"+itemN+"').style.transform = ' rotateZ(180deg) translate(0px,-"+12*blockX/*window.innerWidth*/+"px)'; \
  document.getElementById('item"+itemN+"').style.webkitransition = 'all "+0.1*altMax+"s ease-in-out';\
  document.getElementById('item"+itemN+"').style.webkitTransform = ' rotateZ(180deg) translate(0px,-"+12*blockX/*window.innerWidth*/+"px)'; \
  document.getElementById('item"+itemN+"').style.webkitTransition = 'all "+0.1*altMax+"s ease-in-out';"
  ,520);
  setTimeout(function(){mundo.removeChild(b)}, 1500);
	itemN++;
	//alert(y.length+" "+y.substring(0,y.length-2));
}
}
