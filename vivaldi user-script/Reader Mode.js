var backgroundColor = "white";
var fontColor = "black";
var fontFamily = "Arial, Helvetica, sans-serif";

//Articles in web
var webArticle = new Array;

//Get icons to save them
function getIcon(){
	var linkTag = document.getElementsByTagName("link");
	var iconTag = new Array;
	for (var i=0; i < linkTag.length; i++) {
	  if(linkTag[i].type != undefined && linkTag[i].type.indexOf("icon") != -1)
	  	iconTag.push(linkTag[i]);
	};
	return iconTag;
}
//Info of page
var webInfo = {"title" : document.title, "icon" : getIcon()};

//Find articles without finding articles in articles
function findArticlesIn(node){
	var isPost = false;
	node.className.split(" ").forEach(function(nodeClassName){
		if(nodeClassName.toUpperCase() == "POST") isPost = true;});
		
	if(node.tagName.toUpperCase() == "ARTICLE" || isPost ) {
		webArticle.push(node);
	}else{
		var childNode = node.children;
		for (var i=0; i < childNode.length; i++) {
		  findArticlesIn(childNode[i]);
		};
	}
}

//Remove all the page
function removeAll(){
	document.documentElement.innerHTML = "";
}

//Create the reader mode web
function recreateWeb(nodes){
	document.title = webInfo["title"];
	document.head = document.createElement("head");
	//document.appendChild(document.head);
	document.body = document.createElement("body");
	//document.appendChild(document.body);
	for (var i=0; i < webInfo["icon"].length; i++) {
	  document.head.appendChild(webInfo["icon"][i]);
	};
	/*var readerStyle = document.body.style;
	readerStyle.fontFamily = fontFamily;
	readerStyle.background = backgroundColor;
	readerStyle.color = fontColor;
	readerStyle.padding = "1em 4em 2em 4em";
	readerStyle.lineHeight = "1.6em";*/
	if(nodes != undefined){
		for (var i=0; i < nodes.length; i++) {
		  document.body.appendChild(nodes[i]);
		};
	}
}

//Put the CSS of reader mode
function makeCSS(){
	var css = '\
	body{\
	font-family: '+ fontFamily +' !important;\
	color: '+ fontColor +' !important;\
		padding: 1em 4em 2em 4em !important;\
		line-height: 1.6em !important;\
	}\
	\
	.meta, time{\
		font-size: 0.9em !important;\
		font-style: italic !important;\
	}\
	\
	article{\
		border-bottom: 1px #bbb solid !important;\
	}\
	\
	section, form, input, frame, audio, textarea, button, object, option{\
		display: none !important;\
	}\
	\
	iframe[src*="youtube"], iframe[src*="vimeo"]{\
		display: block !important;\
	}\
	\
	iframe{\
		display: none;\
	}\
	\
	a{\
		text-decoration: none !important;\
	}\
	\
	a:hover{\
		text-decoration: underline !important;\
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

//save all the articles
findArticlesIn(document.body);
if(webArticle.length!=0) {
	//then remove all the page 
	removeAll();
	//after it creates the reader mode web and apply the css 
	recreateWeb(webArticle);
	makeCSS();
	//Finally add the articles
	for(var i = 0; i < webArticle.length; i++) 
		document.body.appendChild(webArticle[i]);

	//That's all
}
