// exercise to test callback functions.
// also some array functions
// and some design patterns

function Fruits(name,callback)
{
	
    this.name = function()
	{
	  console.log(name);
	}	
	
	
};

var g = new Fruits("apple", alart());
g.name();
