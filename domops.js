// DOM manipulation exercises.
// Rishi Ghan

// August 6, 2012

var Creator =  function(elem){
	
	this.multiply = function(){
	var ele = document.getElementById(elem),
	      p = document.createElement("span"),
	      q = document.createTextNode("text");
    ele.appendChild(p); p.appendChild(q);
	
	}
}


var foo = new Creator('parent');
foo.multiply();