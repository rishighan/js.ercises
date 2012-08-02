// make an http request
// get response and print it
var Superman =function(){
	
	this.shapes = function(){
		console.log("square")
	},
	this.colors = function(){
		console.log("red");
	}
	
}
var sup =new Superman();
sup.shapes();
var keys = Object.keys(sup)
console.log(keys);