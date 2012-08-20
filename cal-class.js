function Calendar(month, year, type){
	
	var args = arguments.length;
	    
	    this.year = year || new Date().getFullYear(), 
	    this.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		
		//type
		this.type = type || 'default';

		this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.month = month || 0;
		this.h =[];

		// table inits
		this.statusBar = document.createElement('div');
		this.targetElem = document.getElementById('parent');
		this.tab = document.createElement('table');
		this.weekdayname = [];
	
		// left and right arrows for month navigation
	  	//create the link tag
		this.anchorLeft= document.createElement('span');
		this.anchorRight =document.createElement('span');
	
		this.anchorLeft.textContent = "\u27F5";
		this.anchorRight.textContent = "\u27F6";
}

Calendar.prototype = {
	
	 daysForDates: function(month, year)
	 {
			if(typeof(month)==='number' && typeof(year) === 'number')
			{
				// this just finds out how many days a month has 
				var days = new Date(year, month, 0).getDate();

					//console.log(" Year: "+year+ " Month: "+ month + " Total Days: "+days);

				// Zeller's algorithm: http://en.wikipedia.org/wiki/Zeller's_congruence
				// returns an array of indices, 0 for Sunday, 1 for Monday and so on.
				for (var q = 1; q <= days; q++) {
					if (month < 3) { month += 12; year -= 1; } 

					this.h.push((q + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7);

				};

				//return h; // necessary ?
			}
		
	 },


	buildTable: function()
	{
		// Create status bar, table with weekdays and dates.
		
	
			//set some styling 
			this.targetElem.style.width ='224px';
	
			// month and year on the top status bar
			this.statusBar.className = 'statusBar';
			this.statusBar.textContent = this.months[--this.month]+" "+this.year;
			this.targetElem.appendChild(this.statusBar);
	
	
			// insert into status bar
			this.statusBar.insertBefore(this.anchorLeft, this.statusBar.childNodes[0]);
			this.statusBar.appendChild(this.anchorRight);
	
			// attach click handlers
			this.anchorLeft.addEventListener("click", this.navigateMonth, false);
			this.anchorRight.onclick = function(){console.log("Right")};	
		
			// set styling
			this.tab.className = 'calgrid';
			//attach table to targetElem
			this.targetElem.appendChild(this.tab);

			//attach 5 rows to the table
			for(var j=0; j<=6; j++)
			{
				var row = document.createElement('tr');
				this.tab.appendChild(row);
			}

			// get the first row
			var firstRow = this.tab.getElementsByTagName('tr')[0],
			    dayName = [], dayColumn;
			// print the day names
			for (var i = 0; i < this.weekdays.length; i++) {
					// create text nodes to hold the day names
					// and td to hold them
					dayName[i] = document.createTextNode(this.weekdays[i]);
				    dayColumn = document.createElement('td');
			
					// add them to the row
					dayColumn.appendChild(dayName[i]);
					firstRow.appendChild(dayColumn);
		
			};
	},

	printDates: function(){
		// printing out the dates.
			// Dirty hack here, h[0] is used to calculate the offset
			for (var i = 1, j=1, pos = 0; i <= this.h.length + this.h[0]; i++, pos++) {
				
				var date =[], blankNode = [],
				    dateColumn = document.createElement('td');
				    
				   // create text date and add it to the column	
					date[i] = document.createTextNode(i-this.h[0]); // dirty, dirty hack.
					blankNode  = document.createTextNode(' '); // same here, inserting blank nodes
					
					//dateColumn.appendChild(date[i]);
					
					// do insertAt
					// depending on the offset, insert date into td
					if(pos < this.h[0])
					{
						this.insertAt(dateColumn, blankNode, pos);
					}
					else
				
					{
						this.insertAt(dateColumn, date[i],  pos)
				    }
				
					// decide if a new row should be started
					if(i%7===0)
					{
						this.insertAt(this.tab.rows[j], dateColumn, pos);
						dateColumn.className = 'weekends'; //coloring the weekend cells
						j++; // turn to the next row
					}
					else
					{
						if(i%7 ===1 && dateColumn.textContent!== ' ') dateColumn.className ='weekends';
						this.insertAt(this.tab.rows[j], dateColumn, pos);
						
						
					}
	
			};
	},

	//insert at an index
	insertAt: function(parent, child, n)
	{
		parent.insertBefore(child, parent.childNodes[n]);
	},

	navigateMonth: function(month, year){

		console.log(month);
	
	}

}

var cal = new Calendar(5, 2012);
cal.daysForDates(5,2012);
cal.buildTable();
cal.printDates();

  