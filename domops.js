// DOM manipulation exercises.
// Rishi Ghan

// August 6, 2012

var Calendar = function(){
	
	// build a month with weekdays, weekends etc.
	this.buildMonth =function(month,year){
		
		var args = arguments.length,
		    month = month || 0,
		    year = year || 2012, //default [0,1,2,3,4,5,6]
		    weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
		if(typeof(month)==='number' && typeof(year) === 'number')
		{
			// this just finds out if a month has 
			
			var days = new Date(year, month, 0).getDate(),
				h = [];
				//console.log(" Year: "+year+ " Month: "+ month + " Total Days: "+days);
				
			// Zeller's algorithm: http://en.wikipedia.org/wiki/Zeller's_congruence
			for (var q = 1; q <= days; q++) {
				if (month < 3) { month += 12; year -= 1; }
				
				h.push((q + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7);

			};
			
			//return h;
		}
		
		//print out the weekdays
		var target = document.getElementById('parent'),
			tab = document.createElement('table'),
		  
			weekdayname = [];
			console.log(h.length)
		    
		    target.appendChild(tab); // add table
			for(var b = 0; b<5; b++)
			{
			   var weekdayrow = document.createElement('tr');
			   tab.appendChild(weekdayrow); // add weekday row
			};

		for (var i=0; i < weekdays.length; i++) {
			
			var weekdaycolumn = document.createElement('td'), // create a row
			weekdayname[i] = document.createTextNode(weekdays[i]); 
			weekdayrow.appendChild(weekdaycolumn); // adding rows
			weekdaycolumn.appendChild(weekdayname[i]);
		}


		// start printing the dates corresponding to the weekday names
		// h[] contains indices. However, they repeat themselves after a while.
		// Maybe all we need is the starting index.
		var weekdate = [];
		for (var i = h[0]; i < h.length; i++) {
			var weekdaycolumn = document.createElement('td'),
				weekdate[i] = document.createTextNode()
		};
	}
	
	

}


var cal = new Calendar;
cal.buildMonth(2, 2012);