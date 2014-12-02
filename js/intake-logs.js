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
		alert("not correct");
	} else {
		var spfValue = 'SPF' + courseNumber;
	}

	/*
	if (courseNumber.length != 2) {
		alert("shit is fucked up");
	}

	else {
		alert('SPF' + courseNumber.value);
	};
	*/



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
	for(var i in res) {
			totalLessons += res[i];
		};

	/* NOTE: dateField.value goes into Date Field
			 studentIdNumber.value goes into Student Id field
			 studentLastName.value goes in Last Name Field
			 studentFirstName.value goes in First Name Field
			 spfValue goes into the Course Field
			 rawLessons go into the lesson # field
			 totalLessons go into the TLS field */

	var arr = [dateField.value, studentIdNumber.value, studentLastName.value, studentFirstName.value, spfValue, rawLessons, totalLessons]
	alert(arr);

};















