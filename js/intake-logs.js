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

	/* Adds two '0's to the student number */
	var studentNumberField = document.getElementById('studentNumberField');
	studentNumberField.value = '00';
};

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

	if (courseNumberLength !== 2)
	{
		alert('Not a valid course.');
	} else {
		var spfValue = 'SPF' + courseNumber;
	}

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
		var finalFieldInclude = false;
	};

	/* NOTE: dateField.value goes into Date Field
			 studentIdNumber.value goes into Student Id field
			 studentLastName.value goes in Last Name Field
			 studentFirstName.value goes in First Name Field
			 spfValue goes into the Course Field
			 rawLessons go into the lesson # field
			 totalLessons go into the TLS field */

	var arr = [dateField.value, studentIdNumber.value, studentLastName.value, studentFirstName.value, spfValue, rawLessons, totalLessons]

	var tableRow = document.createElement('tr');

	var tableCell1 = document.createElement('td');
	tableCell1.innerHTML = dateField.value;

	var tableCell2 = document.createElement('td');
	tableCell2.innerHTML = studentIdNumber.value;

	var tableCell3 = document.createElement('td');
	tableCell3.innerHTML = studentLastName.value;

	var tableCell4 = document.createElement('td');
	tableCell4.innerHTML = studentFirstName.value;

	var tableCell5 = document.createElement('td');
	tableCell5.innerHTML = spfValue;

	var tableCell6 = document.createElement('td');
	tableCell6.innerHTML = rawLessons;

	var tableCell7 = document.createElement('td');

	if (finalFieldInclude == true) {
		tableCell7.innerHTML = 'Final';
	}	else {
		tableCell7.innerHTML = ' ';
	};

	var tableCell8 = document.createElement('td');
	tableCell8.innerHTML = totalLessons;

	var tableCell9 = document.createElement('td');
	tableCell9.className = 'text-right';
	tableCell9.innerHTML = '$ ';

	var tableCell10 = document.createElement('td');
	tableCell10.innerHTML = totalLessons * 3.50;

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

	var tableBody = document.getElementById('tableBody');
	
	tableBody.appendChild(tableRow);
};















