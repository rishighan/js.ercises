// Closures I

// function test(){
// 	
// 	var something = "First";
// 	console.log("First function:"+something);
// 	function anothertest()
// 	{
// 		console.log("Second level function:"+something);
// 		
// 		function yetanothertest()
// 		{
// 			something = "something new and different";
// 			console.log("Third level function:"+something);
// 		}
// 		
// 		yetanothertest();	
// 	}
// 	
// anothertest();
// 
// }
// 
// test();

// Closures II

// var foo = 0; // global variable
// function addNumbers(num)
// {
//    var sumfoo = foo + num;
//    return sumfoo;
// 
//     function pool()
// 	{
//       console.log("asd");  
// 	}
// }
// 
// foo = 10;
// 
// console.log(addNumbers(1));


//Closure III

var arr = [1,2,3,4];
console.log(typeof(arr));

//Closure IV
function moorfoof(name)
{
	console.log(var ss = function(name){name="rishi";})
}

moorfoof("ghan");