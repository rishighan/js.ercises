// rishi ghan
// trying to create a graphing class that is general purpose
// july 26, 2012

function Graphr (xdata,ydata){
	
	this.type = "pie";
	this.xdatapoints =  function(){
		alert(xdata);
	};
	this.ydatapoints =  function(){
		console.log(ydata);
	}
}

var arr1= [1,2,3],
	arr2 = [4,5,6];
var g = new Graphr(arr1,arr2);
		g.xdatapoints;
		g.ydatapoints;