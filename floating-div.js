// Rishi Ghan
// Ninth Pixie

// 2d drawing in Javascript
function drawGrid(canvasID){
	
	var canvas = document.getElementById(canvasID),
	    context = canvas.getContext('2d');
	
		context.fillStyle="#000";
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(0,900);
		
		
}

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
