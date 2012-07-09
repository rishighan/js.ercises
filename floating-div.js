// Rishi Ghan
// Ninth Pixie

function floatDiv(element)
{
	
 var foo = document.getElementById(element),

	 tall = foo.offsetHeight,
	 wide = foo.offsetWidth,
	 docheight = document.body.clientHeight,
	 scrollheight = document.body.scrollHeight;
	
	window.onscroll = function moveThis(){
	 console.log('moved');
	}
		
}

floatDiv('sidebar');