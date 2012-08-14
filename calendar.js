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

			//attach table to target
			target.appendChild(tab);

			//attach 5 rows to the table
			for(var j=0; j<6; j++)
			{
				var row = document.createElement('tr');

				tab.appendChild(row);
			}

			// get the first row
			var firstRow = tab.getElementsByTagName('tr')[0],
			    dayName = [], dayColumn;
			// print the day names
			for (var i = 0; i < weekdays.length; i++) {
					// create text nodes to hold the day names
					// and td to hold them
					dayName[i] = document.createTextNode(weekdays[i]);
				    dayColumn = document.createElement('td');
					
					// add them to the row
					dayColumn.appendChild(dayName[i]);
					firstRow.appendChild(dayColumn);
				
			};

			// printing out the dates.
			
			var secondRow = tab.getElementsByTagName('tr')[1];
				
			for (var i = 1; i <= h.length; i++) {
				var date =[],
				    dateColumn = document.createElement('td');
				    // create text date and add it to the column
					date[i] = document.createTextNode(i);
					dateColumn.appendChild(date[i]);
					//find the correct index here
					
					
		
			};
			
	
	}
	
	// element traversal function
	// really want to get the index of the element whose parent I pass as an argument
	this.find = function(parent, n)
	{
		// what type of element does this accept?
		if(parent.firstElementChild) parent = parent.firstElementChild;
		return parent;
	}

}


var cal = new Calendar;
cal.buildMonth(2, 2012);