// Method invocation pattern
// when a function is stored as a property of an object, we call it a method.
// when a method is invoked, it is bound to that object
// if an invocation expression contains a refinement (a dot .) it is invoked as a method

var myObject ={
	value:0,
	increment :function(inc){
		this.value+= typeof inc == 'number'? inc :1;
	}
};

myObject.increment(5);
console.log(myObject.value);

// Function invocation
