// DOM manipulation exercises.
// Rishi Ghan

// August 6, 2012

var Calendar = function(){
	
	// build a month with weekdays, weekends etc.
	this.buildMonth =function(month,year){
		
		var args = arguments.length,
		    month = month || 0,
		    year = year || 2012; //default [0,1,2,3,4,5,6]
		if(typeof(month)==='number' && typeof(year) === 'number')
		{
			// this just finds out if a month has 
			
			var days = new Date(year, month, 0).getDate();
				dayofweek = 0, // thats a sunday
				h = 0;
	
				console.log(" Year: "+year+ " Month: "+ m + " Total Days: "+days);
				
			// loop and print number of days
			for (var q=1; q <= days; q++) {
				if (month < 3) { month += 12; year -= 1; }
				// Zeller's algorithm
				var h = (q + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
				console.log(h+"->"+ q);
			};
		}
	}
	

}


var cal = new Calendar;
cal.buildMonth(12, 2012);