// rishi ghan
// trying to create a graphing class that is general purpose
// july 26, 2012

function Graphr (xdata, ydata, divid){
	var totaldatapoints = 0,
		percentages =[],
		angles =[];
	this.kind = function() {console.log("pie")};
	this.xdatapoints =  function(){
		 totaldatapoints = xdata.length;
		 
		 // loop through data points array and calculate percentages.
		for (var i=0; i < xdata.length; i++) {
			percentages[i] = Math.ceil((xdata[i]/totaldatapoints) *100);
			console.log(percentages[i]);
		};
		
		
	};
	this.ydatapoints =  function(){
		console.log(ydata);
	}
}


//
var arr1= [1,2,3],
	arr2 = [4,5,6];
var g = new Graphr(arr1,arr2);
		g.kind(); // this is how you call a method.
		g.ydatapoints(); // printing out the contents of an array
		g.xdatapoints();