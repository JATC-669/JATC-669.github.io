function intakeLogsInit() {

	/* Gets Todays Date and formats it */
	var d          = new Date();
    var day        = d.getDate();
    var month      = d.getMonth();
    var year       = d.getFullYear() - 2000;
	var todaysDate = month + 1 + '/' + day + '/' + year;

	/* Appends todays date to the date field. */
	var node = document.getElementById('dateField');
	node.value = todaysDate;

};

function removeTable(id)
{
    return (table=document.getElementById('thisTotalTable')).parentNode.removeChild(table);
}

function addLog() {


	/*************************/
	/* STUDENT NUMBER GRABER */
	/*************************/
	var studentIdNumber = document.getElementById('studentNumberField');

	/************************/
	/* STUDENT NAME GRABERS */
	/************************/
	var studentLastName = document.getElementById('studentLastName');
	var studentFirstName = document.getElementById('studentFirstName');

	/*************************/
	/* COURSE NUMBER GRABBER */
	/*************************/
	var course = document.getElementById('course');
	var courseNumber = course.value;
	var courseNumberLength = courseNumber.length;
	var spfValue = 'SPF' + courseNumber;


	/**********************/
	/* LESSON CALCULATION */
	/**********************/

	/* Ids the input for the lessons */
	var lessonField = document.getElementById('lessonField');
	
	/* Set a var for the string from the lesson field */
	var rawLessons = lessonField.value;

	/* Turn that string into an array */
	var res = rawLessons.split(', '); 
	
	/* This loop runs through each of the array nodes to find out if it is a multi lesson entry */
	for (var i = 0; i < res.length; i++) {

		/* If it is a single lesson, the array node is converted to 1 */
		if      (res[i].length <= 2) {
				res[i] = 1
		}

		/* If it is a multi lesson, the node is split, and the total lession # is calculated. The result is added to the array node */
		else if (res[i].length >= 3) {
			var multiLessons = res[i].split("-");
			var totalMultiLession = multiLessons[1] - multiLessons[0] + 1;
			res[i] = totalMultiLession
		};
	};

	/* Adds the lesson counts together */
	var totalLessons=0;
	for (var i in res) {
			totalLessons += res[i];
	};

	/*****************/
	/* Final Grabber */
	/*****************/
	var finalField = document.getElementById('finalField');
	if (finalField.value ===  'Y' || 
		finalField.value ===  'y' || 
		finalField.value ===  'yes' || 
		finalField.value ===  'YES' || 
		finalField.value ===  'Yes' ||
		finalField.value ===  'f' ||
		finalField.value ===  'F' || 
		finalField.value ===  'final' || 
		finalField.value ===  'Final' || 
		finalField.value ===  'FINAL') {
		
		var finalFieldInclude = true;
	}	else {
		var finalFieldInclude = null;
	};

	/* Creates an array of all the values */
	var arr = [dateField.value, studentIdNumber.value, studentLastName.value, studentFirstName.value, spfValue, rawLessons, totalLessons]

	/* Creats a TR element */
	var tableRow = document.createElement('tr');

	/* Creates a TD elements and adds the Date as its value */
	var tableCell1 = document.createElement('td');
	tableCell1.innerHTML = dateField.value;

	/* Creates a TD elements and adds the Student ID as its value */
	var tableCell2 = document.createElement('td');
	tableCell2.innerHTML = studentIdNumber.value;

	/* Creates a TD elements and adds the Student Last Name as its value */
	var tableCell3 = document.createElement('td');
	tableCell3.innerHTML = studentLastName.value;

	/* Creates a TD elements and adds the Student First Name as its value */
	var tableCell4 = document.createElement('td');
	tableCell4.innerHTML = studentFirstName.value;

	/* Creates a TD elements and adds the Course Number as its value */
	var tableCell5 = document.createElement('td');
	tableCell5.innerHTML = spfValue;

	/* Creates a TD elements and adds the Lesson Numbers submitted as its value */
	var tableCell6 = document.createElement('td');
	tableCell6.innerHTML = rawLessons;

	/* Creates a TD element and if its a final, adds 'Final' as its value */
	var tableCell7 = document.createElement('td');
	if (finalFieldInclude == true) {
		tableCell7.innerHTML = 'Final';
	}	else {
		tableCell7.innerHTML = ' ';
	};

	/* Creates a TD element and adds the Calculated Lesson Numbers Total as its value */
	var tableCell8 = document.createElement('td');
	tableCell8.innerHTML = totalLessons;

	/* Creates a TD elements and adds a '$' as its value*/
	var tableCell9 = document.createElement('td');
	tableCell9.className = 'text-right';
	tableCell9.innerHTML = '$ ';

	/* Creates a TD elements and adds the Calculated Cost as its value */
	var tableCell10 = document.createElement('td');
	tableCell10.innerHTML = totalLessons * 3.50;

	/* Appends the TDs to the TR */
	tableRow.appendChild(tableCell1);
	tableRow.appendChild(tableCell2);
	tableRow.appendChild(tableCell3);
	tableRow.appendChild(tableCell4);
	tableRow.appendChild(tableCell5);
	tableRow.appendChild(tableCell6);
	tableRow.appendChild(tableCell7);
	tableRow.appendChild(tableCell8);
	tableRow.appendChild(tableCell9);
	tableRow.appendChild(tableCell10);



	/* Defines the TBODY element */
	var tableBody = document.getElementById('tableBody');
	


	/* Validates Data for empty fields */	
	if (studentIdNumber.value.length !== 8) {
		alert('Not a valid Student Number')
	}
	else if (studentLastName.value === "") {
		alert('Enter a Last Name')
	}
	else if (studentFirstName.value === "") {
		alert('Enter a First Name')
	}
	else if (courseNumber === "") {
		alert('Enter a Course Number')
	}
	else if (courseNumber.length != 2) {
		alert('Not a valid Course number')
	}
	else if (lessonField.value === "" && finalField.value === "") {
		alert('Enter a lesson number or Final')
	}
	else
	{
		
		/* Appends the TR to the TBODY */
		tableBody.appendChild(tableRow);

		/* Clears Data for next Entry */
		studentIdNumber.value = null;
		studentLastName.value = null;
		studentFirstName.value = null;
		course.value = null;
		lessonField.value = null;
		finalField.value = null;
	};

	var totalTable = document.createElement('table');
	var totalRow = document.createElement('tr');
	var totalRowTitle = document.createElement('td')
	var totalRowTitleContent = document.createTextNode('Totals');

	totalRowTitle.appendChild(totalRowTitleContent);
	totalRow.appendChild(totalRowTitle);
	totalTable.appendChild(totalRow);

	document.body.appendChild(totalTable);
	totalTable.setAttribute('id', 'thisTotalTable');
};










