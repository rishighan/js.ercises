// rishi ghan
// trying to create a general purpose graphing class 
// july 26, 2012

function Graphr (xdata, ydata, divid){
	var sum = 0,
		percentages =[],
		angles =[],
		canvas = document.getElementById(divid);
		
	this.kind = function() {console.log("pie")},
	
	// sums up the elements in an array
	this.sum = function(arr) {
		for(var i=0; i<arr.length; i++)
		{
			sum+= arr[i];
		}
		return sum;
	},
	
	// ??
	this.xdatapoints =  function(){
		 var totaldatapoints = this.sum(xdata);
		 
		 // loop through data points array and calculate percentages.
		for (var i=0; i < xdata.length; i++) {
			percentages[i] = Math.ceil((xdata[i]/totaldatapoints) *100); // percentages
			angles[i] = Math.ceil((xdata[i]/totaldatapoints) *360)  //angles
			//console.log(angles[i]);
		};
		
		// find the fucking canvas element
		context = canvas.getContext("2d");
		
	    //co-ordinates (where should they be initialized)
		
	},
	this.ydatapoints =  function(){
		console.log(ydata);
	}
} //end the class definition


// testing
var arr1= [1,2,1],
	arr2 = [4,5,6];
var g = new Graphr(arr1,arr2,"grid");
		g.kind(); // this is how you call a method.
		g.ydatapoints(); // printing out the contents of an array
		g.xdatapoints();