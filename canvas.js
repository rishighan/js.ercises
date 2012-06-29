// Rishi Ghan
// File to control the canvas 


window.onload = function(){
	var canvas = document.getElementById("htmlcanvas");
	var context = canvas.getContext("2d");
	context.beginPath();
    context.moveTo(100,150);
    context.lineTo(450,50);
	context.lineWidth= 5;
    context.stroke();
	context.lineCap = 'round';
	
	context.lineTo(0,0);
	context.lineWidth= 1;
    context.stroke();


    for (var i=0; i < 361; i++) { 
		context.beginPath();
		context.arc(100, 100, 98, (1*Math.PI), (i*Math.PI), false);
		context.stroke();
    };
}
