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
				
			// Zeller's algorithm http://en.wikipedia.org/wiki/Zeller's_congruence
			for (var q = 1; q <= days; q++) {
				if (month < 3) { month += 12; year -= 1; }
				
				h.push((q + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7);
				//console.log(h+"->"+ q);

			};
			return h;
		}
		
		//print out the weekdays
		var target = document.getElementById('parent'),
			tab = document.createElement('table'),
		    weekdayrow = document.createElement('tr'),
			weekdayname = [];
			
		    
		    target.appendChild(tab); // add table
			tab.appendChild(weekdayrow); // add weekday row
			
		for (var i=0; i < weekdays.length; i++) {
			
			var weekdaycolumn = document.createElement('td') // create a row
			weekdayname[i] = document.createTextNode(weekdays[i]); 
			weekdayrow.appendChild(weekdaycolumn); // adding rows
			weekdaycolumn.appendChild(weekdayname[i]);
			
		};
	}
	

}


var cal = new Calendar;
cal.buildMonth(8, 2012);