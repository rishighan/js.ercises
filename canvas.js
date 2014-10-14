var board = document.getElementById('board');
console.log(board.id)

var context = board.getContext("2d"),
    x = 0, y =400,
    radius = 10,
startAngle = 0,
endAngle = 360,
counterClockwise = false;
context.fillStyle = 'red';
	//     for(var i=0; i<5; i++)
	// {
	// 	context.beginPath();
	// 	context.rect(x, y, 200, 200);
	// 	context.closePath();
	// 	context.fill();
	// }
	for(var i=1; i<6; i++){
	context.beginPath();
	 context.arc( (radius*i*10), y,  radius*i, startAngle, endAngle, counterClockwise);
	
	 	context.fill();
	
	}