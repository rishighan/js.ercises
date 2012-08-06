// make an http request
// get response and print it
<<<<<<< HEAD
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
=======


var xhr = new XMLHttpRequest();


xhr.open("GET", "http://google.com", true);
xhr.send();
console.log(xhr.responseText);
>>>>>>> DOM manipulation
