// rishi ghan
// trying to create a general purpose graphing class 
// july 26, 2012

function Graphr (xdata, ydata, divid){
	var sum = 0,
		percentages =[],
		angles =[],
		canvas = document.getElementById(divid);
	// unnecessary function	
	this.kind = function() {console.log("pie")},
	
	// sums up the elements in an array
	this.sum = function(arr) {
		for(var i=0; i<arr.length; i++)
		{
			sum+= arr[i];
		}
		return sum;
	},
	
	// draws a pie chart when you supply an array and a canvas id
	this.pie =  function(){
		 var totaldatapoints = this.sum(xdata);
		 
		 // loop through data points array and calculate percentages.
		for (var i=0; i < xdata.length; i++) {
			percentages[i] = Math.ceil((xdata[i]/totaldatapoints) *100); // percentages
			angles[i] = Math.ceil((xdata[i]/totaldatapoints) *360)  //angles
			console.log(angles[i]);
		};
		
		// find the fucking canvas element
		context = canvas.getContext("2d");
		
	    // co-ordinates (where should they be initialized ?)
	    
		var x = canvas.width / 2,
		    y = canvas.height / 2,
		    startAngle = 0,
		    endAngle = 0,
		    radius = 100, // this should be customizable.
		    counterclockwise = true;
		
		// loop through the angles array and draw arcs, bitch.
	    // also show the edges of the pie slices ?
	    
	    for(var j=1; j<=angles.length;j++){
		  context.beginPath(); 
		  context.arc(x,y,radius,angles[j-1], angles[0], counterclockwise);
		  context.stroke();  
	    };
	context.closePath();
	},
	this.ydatapoints =  function(){
		console.log(ydata);
	}
} //end the class definition


// testing
var arr1= [12,3,45,22,334,22],
	arr2 = [4,5,6];
var g = new Graphr(arr1,arr2,"board");
		g.kind(); // this is how you call a method.
		g.ydatapoints(); // printing out the contents of an array
		g.pie();