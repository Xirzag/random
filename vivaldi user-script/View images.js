if(!window.location.pathname.match(/\.(jpg|bmp|gif|svg|webp|jpeg|png|ico)$/i)) {

var imageSrc = new Array;
for(var i = 0; i < document.images.length; i++)
	imageSrc.push(document.images[i].src);
	
console.log(imageSrc);

function findBackgroundUrl(node){
	(node.style.background + "," + node.style.backgroundImage).split(",").forEach(
		function(background) {
			var url = / *url\( *['"]?([^'"]+)['"]? *\) */g.exec(background);
			//if(background != undefined && background != "") {
				console.log(background);
				console.log(url);
			//}
			if(url != undefined && url[1]!=undefined) imageSrc.push(url[1]);
		}
	);

	var childNode = node.children;
	for (var i=0; i < childNode.length; i++) {
	  findBackgroundUrl(childNode[i]);
	};
}
findBackgroundUrl(document.body);
document.body.innerHTML = "";
	
var css = '\
img{\
	width: auto;\
	max-height:'+ window.innerHeight/6 +'px;\
	margin: 1em;\
	display: inline-block;\
	transition: transform 0.2s;\
}\
img:hover{\
	transform: scale(1.2);\
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

for(var i = 0; i < imageSrc.length; i++) {
	var link = document.createElement("a");
	link.href = imageSrc[i];	
	var image = document.createElement("img");
	image.src = imageSrc[i];	
	document.body.appendChild(link);
	link.appendChild(image);
}
}
