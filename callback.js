// exercise to test callback functions.
// also some array functions
// and some design patterns

function Car(make, model, year){

	this.make = make,
	this.model = model,
	this.year = year;
	
}

// this is overriding the toString() function.
Car.prototype.toString = function(){
	console.log("This car, which happens to be a "+this.make+" has been riding in the hood since "+ this.year);
}
var car = new Car("sedan", "accent", "2007");
var car2 = new Car("Family", "Odyssey", "2010");

car.toString();
car2.toString();