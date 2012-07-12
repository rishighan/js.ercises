// Rishi Ghan
// Ninth Pixie

// 2d drawing in Javascript
function drawGrid(canvasID){
	
	var canvas = document.getElementById(canvasID),
	    context = canvas.getContext('2d');

		context.beginPath();
		context.moveTo(0,25);
		context.lineTo(122,25);
		context.lineTo(0,98);
		context.lineTo(122,98);
	
		context.closePath();
		context.fill();
		
		
}

// making an HTTP message
function makeHTTPObject(){
	try{
		return new XMLHttpRequest();
		catch(error){}
		try {return new ACtiveXObject("Msxml2.XMLHTTP")}
	}
}
var request = makeHTTPObject();
request.open("GET", "http://rishighan.com/")

function floatDiv(element)
{
	
 var foo = document.getElementById(element),
     scrolltop = document.body.scrollTop;  
	 
	 window.onscroll = function(){
		var windowscrollpos = window.pageYOffset;
		if(windowscrollpos===0) foo.style.top = '0px';
		else{
		foo.style.top = windowscrollpos+"px";
	}
}

}

floatDiv('sidebar');
drawGrid('gridder');
