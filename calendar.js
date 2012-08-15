// Calendar, yo.
// Rishi Ghan

// August 6, 2012

var Calendar = function(){
	
	// build a month with weekdays, weekends etc.
	this.buildMonth =function(month,year){
		
		var args = arguments.length,
		    month = month || 0,
		    year = year || new Date().getFullYear(), 
		    weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		
		if(typeof(month)==='number' && typeof(year) === 'number')
		{
			// this just finds out how many days a month has 
			var days = new Date(year, month, 0).getDate(),
				h = [];
				//console.log(" Year: "+year+ " Month: "+ month + " Total Days: "+days);
				
			// Zeller's algorithm: http://en.wikipedia.org/wiki/Zeller's_congruence
			// returns an array of indices, 0 for Sunday, 1 for Monday and so on.
			for (var q = 1; q <= days; q++) {
				if (month < 3) { month += 12; year -= 1; } 
				
				h.push((q + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7);

			};
			
			//return h; // necessary ?
		}
		
		//print out the weekday
		var statusBar = document.createElement('div'),
			target = document.getElementById('parent'),
			tab = document.createElement('table'),
			weekdayname = [];
			
			// month and year on the top status bar
			statusBar.textContent = months[month]+" "+year;
			target.appendChild(statusBar);
			console.log(months[month]);
			
			// set styling
			tab.className = 'calgrid';
			//attach table to target
			target.appendChild(tab);

			//attach 5 rows to the table
			for(var j=0; j<=6; j++)
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
			// Dirty hack here, h[0] is used to calculate the offset
			for (var i = 1, j=1, pos = 0; i <= h.length + h[0]; i++, pos++) {
				
				var date =[], blankNode = [],
				    dateColumn = document.createElement('td');
				    
				   // create text date and add it to the column	
					date[i] = document.createTextNode(i-h[0]); // dirty, dirty hack.
					blankNode  = document.createTextNode(' '); // same here, inserting blank nodes
					
					//dateColumn.appendChild(date[i]);
					
					// do insertAt
					// depending on the offset, insert date into td
					if(pos < h[0])
					{
						insertAt(dateColumn, blankNode, pos);
					}
					else
				
					{
						insertAt(dateColumn, date[i],  pos)
				    }
				
					// decide if a new row should be started
					if(i%7===0)
					{
						insertAt(tab.rows[j], dateColumn, pos);
						dateColumn.className = 'weekends'; //coloring the weekend cells
						j++; // turn to the next row
					}
					else
					{
						if(i%7 ===1 && dateColumn.textContent!== ' ') dateColumn.className ='weekends';
						insertAt(tab.rows[j], dateColumn, pos);
						
						
					}
	
			};

	}
	//insert at an index
	function insertAt(parent, child, n)
	{
		parent.insertBefore(child, parent.childNodes[n]);
	}

}

// This is how you call it.
var cal = new Calendar;
cal.buildMonth(3, 2012);