
// function to reverse a given string
// E.g. "jag testar" => "ratset gaj"
function reverse(params)
{
	var temp =[];
	// loop over the input string in reverse order and 
	// push them into a temp array and finally log it.
	for (var i = params.length - 1; i >= 0; i--)
	{
		temp.push(params[i]);
	};
	
	console.log(temp);
}


function countLetterRuns(params)
{
	var temp =[],
        check =null,
        count=0;
	
	splittedArray = params.split(" ");
	
	for (var i=0; i < splittedArray.length; i++) 
	{
		
	};
}

countLetterRuns("asdasdadasd");