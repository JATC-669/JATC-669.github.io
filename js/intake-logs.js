var backDateInput   		 = document.getElementById('backDateInput');
var dueDateInput    		 = document.getElementById('dueDateInput');
var courseNameInput 		 = document.getElementById('courseNameInput');
var graderNameInput 		 = document.getElementById('graderNameInput');
var weekEndingInput 		 = document.getElementById('weekEndingInput');

var stuIdInput   			 = document.getElementById('stuIdInput');
var fNameInput   			 = document.getElementById('fNameInput');
var lNameInput   			 = document.getElementById('lNameInput');
var lessonsInput 			 = document.getElementById('lessonsInput');

var weekEndingHeaderOutput   = document.getElementById('weekEndingHeaderOutput');
var graderNameHeaderOutput   = document.getElementById('graderNameHeaderOutput');

var graderInfoTable          = document.getElementById('graderInfoTable');
var graderBackDateOutput     = document.getElementById('graderBackDateOutput');
var graderDueDateOutput      = document.getElementById('graderDueDateOutput');
var graderCourseNumberOutput = document.getElementById('graderCourseNumberOutput');
var graderTotalLessonsOutput = document.getElementById('graderTotalLessonsOutput');
var graderTotalPayOutput     = document.getElementById('graderTotalPayOutput');

var intakeLog 				 = document.getElementById('intakeLog');
var entryLog				 = document.getElementById('entryLog');

var backDateValue;

function setDueDate() {

	var initDueDate;

	Date.prototype.addDays = function(days)
	{
	    var dat = new Date(this.valueOf());
	    dat.setDate(dat.getDate() + days);
	    return dat;
	};

	// Init due date based on the back date
	initDueDate = backDateValue.addDays(3);
	
	// Adds 2 days if the due date falls on Sat
	if (initDueDate.getDay() === 6) {
		initDueDate.addDays(2);
	}

	// Adds 2 days if the due date falls on Sun
	else if (initDueDate.getDay() === 0) {
		initDueDate.addDays(1);
	}

	// If it falls on a week day
	else {
		initDueDate = initDueDate;
	}

	
	dueDateInput.value = (initDueDate.getMonth() +1) + '/' + initDueDate.getDate() + '/' + initDueDate.getFullYear();	
}

// Sets the INIT dates for the Back Date and Due Date. These can be changed.
function setInitBackDate() {

	Date.prototype.addDays = function(days)
	{
	    var dat = new Date(this.valueOf());
	    dat.setDate(dat.getDate() + days);
	    return dat;
	};

	var dat = new Date();
	backDateValue = dat.addDays(0);
	backDateInput.value = (backDateValue.getMonth() + 1) + '/' + backDateValue.getDate() + '/' +  backDateValue.getFullYear();
	setDueDate();
}

// Clears inputs after a valad entry has been made
function clearLessons() {

	stuIdInput.value      = '';
	fNameInput.value      = '';
	lNameInput.value      = '';
	lessonsInput.value    = '';
}

function tallyLessons(x) {
	var rl = intakeLog.rows.length;
	var added = 0;
  var cell;

		for (var i = 1; i < rl; i++) {
			cell = Number(intakeLog.rows[i].cells[7].innerHTML);
			added = added + cell;
		}

	return added;
}

// Gets the total of the submissions
function totalLessons(y) {
	
	var splitLessons      = y.split(/[ ,]+/);
	var spltLessonsLength = splitLessons.length;
	var lessonTotalOutput = [];
	var total             = 0;

	// Sets numarical values for each array node
	for (var i = 0; i < splitLessons.length; i++) {
		if (splitLessons[i].length <= 2) {
			lessonTotalOutput[i] = 1;
		}

		else if (splitLessons[i] === 'Final' || splitLessons[i] === 'final') {
			lessonTotalOutput[i] = 1;
		}

		else {

			var multi = splitLessons[i].split('-');
			var multiTotal = (multi[1] - multi[0]) + 1;
			lessonTotalOutput[i] = multiTotal;
		}
	}

	for (var j = 0; j < lessonTotalOutput.length; j++) {	
		total = total + lessonTotalOutput[j];	
	}

	return total;
}

function createGraderInfo() {

	weekEndingHeaderOutput.innerHTML   = 'Week Ending:&nbsp;' + weekEndingInput.value;
	graderNameHeaderOutput.innerHTML   = graderNameInput.value + '&nbsp-&nbsp';
	graderInfoTable.style.display      = "table";	
	graderBackDateOutput.innerHTML     = backDateInput.value;
	graderDueDateOutput.innerHTML      = dueDateInput.value;
	graderCourseNumberOutput.innerHTML = courseNameInput.value;
	graderTotalLessonsOutput.innerHTML = tallyLessons();
	graderTotalPayOutput.innerHTML     =  '$' + (graderTotalLessonsOutput.innerHTML * 3.50).toFixed(2);
}

// Splits lesson input into an array
function parseLessons(lessons) {	
	var splitLessons = lessons.split(/[ ,]+/);
	return splitLessons;
} 

function writeEntryToLog(timestamp, grader, backDate, course, studentId, fname, lname, lessons) {
	var row    = entryLog.insertRow(-1);
	var cell1  = row.insertCell(0);	
	var cell2  = row.insertCell(1);	
	var cell3  = row.insertCell(2);
	var cell4  = row.insertCell(3);
	var cell5  = row.insertCell(4);
	var cell6  = row.insertCell(5);
	var cell7  = row.insertCell(6);
	var cell8  = row.insertCell(7);
	var cell9  = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);

	// Visibility Classes
	cell1.className = 'hidden'; // Screen
	cell2.className = 'hide-for-print'; // Screen
	cell9.className = 'hide-for-print'; // Print
	cell11.className = 'hide-for-print'; // Print

	cell1.innerHTML  = timestamp;
	cell2.innerHTML  = backDate;
	cell3.innerHTML  = studentId;
	cell4.innerHTML  = lname;
	cell5.innerHTML  = fname;
	cell6.innerHTML  = course;
	cell7.innerHTML  = parseLessons(lessons);
	cell8.innerHTML  = totalLessons(cell7.innerHTML);
	cell9.innerHTML  = grader;
	cell10.innerHTML = '$' + Number((cell8.innerHTML) * 3.50).toFixed(2);
	cell11.innerHTML = '<button onclick="deleteRow(this)" class="hide-for-print">DELETE</button>';
}

function addEntry() {

	// VALADATION
	weekEndingInput.style = 'border:1px solid #ccc;padding:3px';
	stuIdInput.style      = 'border:1px solid #ccc;padding:3px';
	fNameInput.style      = 'border:1px solid #ccc;padding:3px';
	lNameInput.style      = 'border:1px solid #ccc;padding:3px';
	lessonsInput.style    = 'border:1px solid #ccc;padding:3px';

	if (courseNameInput.value === 'COURSE') {
		alert('You did not select a course');
	}
	else if (weekEndingInput.value === '') {
		weekEndingInput.style.border = '1px solid red';
		weekEndingInput.focus();	
	}
	else if (stuIdInput.value.length != 6) {
		stuIdInput.style.border = '1px solid red';
		stuIdInput.focus();
	}
	else if (fNameInput.value === '') {
		fNameInput.style.border = '1px solid red';
		fNameInput.focus();
	}
	else if (lNameInput.value === '') {
		lNameInput.style.border = '1px solid red';
		lNameInput.focus();
	}
	else if (lessonsInput.value === '') {
		lessonsInput.style.border = '1px solid red';
		lessonsInput.focus();
	}
	// END VALADATION

	else {

		// Creates a timstamp for log entry
		var entryTimestamp = new Date();

		writeEntryToLog(entryTimestamp.getTime(),graderNameInput.value,backDateInput.value,courseNameInput.value,stuIdInput.value,fNameInput.value,lNameInput.value,lessonsInput.value);
		//clearLessons();
		stuIdInput.focus();	
		createGraderInfo();
	}
}

function selectGrader() {
	var today     = new Date();
	var dayOfWeek = today.getDay();
	//var graderNameValue = document.getElementById('graderNameValue');
	var grader1   = document.getElementById('grader1');
	var grader2   = document.getElementById('grader2');
	var grader3   = document.getElementById('grader3');
	var grader4   = document.getElementById('grader4');
	var grader5   = document.getElementById('grader5');
	
	if ((courseNameInput.value === "04" && dayOfWeek === 1) || (courseNameInput.value === "04" && dayOfWeek === 3) || (courseNameInput.value === "04" && dayOfWeek === 5)){
		grader1.selected = true;
	}

	else if ((courseNameInput.value === "04" && dayOfWeek === 2) || (courseNameInput.value === "04" && dayOfWeek === 4)){
		grader2.selected = true;
	}

	else if ((courseNameInput.value === "07" && dayOfWeek === 1) || (courseNameInput.value === "07" && dayOfWeek === 3) || (courseNameInput.value === "07" && dayOfWeek === 5)){
		grader3.selected = true;
	}

	else if ((courseNameInput.value === "07" && dayOfWeek === 2) || (courseNameInput.value === "07" && dayOfWeek === 4)){
		grader4.selected = true;
	}

	else if (courseNameInput.value === "19") {
		grader5.selected = true;
	}
}

function deleteRow(t) {
	var row = t.parentNode.parentNode;
    document.getElementById("intakeLog").deleteRow(row.rowIndex);
    createGraderInfo();
}

function upload() {

	// Creates arrarys for the headers and rows
	var jsonArrayHeaders = [];
	var jsonArrayValues = [];
	//var intakeLog = document.getElementById('intakeLog');
	var numberOfRows = intakeLog.rows.length;
	var numberOfCells = intakeLog.rows[0].cells.length - 1;
	var jsonOutput = {"submissions":[]};

	for (var i = 0; i < numberOfCells; i++) {
		jsonArrayHeaders.push(document.getElementById('intakeLog').rows[0].cells[i].innerHTML);
	}
	
	for (var b = 1; b < numberOfRows; b++) {
		var entry = [];
			
		for (var j = 0; j < numberOfCells; j++) {
			entry.push(intakeLog.rows[b].cells[j].innerHTML);
		}

		jsonArrayValues.push(entry);
	}
	
	for (var a = 0; a < numberOfRows - 1; a++) {
		jsonOutput.submissions.push('{' + '"' + jsonArrayHeaders[0] + '":"' + jsonArrayValues[a][0] + '", ' + '"' + jsonArrayHeaders[1] + '":"' + jsonArrayValues[a][1] + '", ' + '"' + jsonArrayHeaders[2] + '":"' + jsonArrayValues[a][2] + '", ' + '"' + jsonArrayHeaders[3] + '":"' + jsonArrayValues[a][3] + '", ' + '"' + jsonArrayHeaders[4] + '":"' + jsonArrayValues[a][4] + '", ' + '"' + jsonArrayHeaders[5] + '":"' + jsonArrayValues[a][5] + '", ' + '"' + jsonArrayHeaders[6] + '":"' + jsonArrayValues[a][6] + '", ' + '"' + jsonArrayHeaders[7] + '":"' + jsonArrayValues[a][7] + '", ' + '"' + jsonArrayHeaders[8] + '":"' + jsonArrayValues[a][8] + '", ' + '"' + jsonArrayHeaders[9] + '":"' + jsonArrayValues[a][9] + '"}');
	}

	var submissions = '"submissions":[' + jsonOutput.submissions + ']';
	
	m1 = graderInfoTable.rows[0].cells[0].innerHTML;
	n1 = graderInfoTable.rows[0].cells[1].innerHTML;
	o1 = graderInfoTable.rows[0].cells[2].innerHTML;
	p1 = graderInfoTable.rows[0].cells[3].innerHTML;
	q1 = graderInfoTable.rows[0].cells[4].innerHTML;
	r1 = 'GRADER';
	s1 = 'WEEK ENDING';

	m2 = graderInfoTable.rows[1].cells[0].innerHTML;
	n2 = graderInfoTable.rows[1].cells[1].innerHTML;
	o2 = graderInfoTable.rows[1].cells[2].innerHTML;
	p2 = graderInfoTable.rows[1].cells[3].innerHTML;
	q2 = graderInfoTable.rows[1].cells[4].innerHTML;
	r2 = graderNameInput.value;
	s2 = weekEndingInput.value;



	start = '"intakeLogData":[{"';
	split = '":"';
	comma = '","';
	end   = '"}]'

	var intakeLogData = start + m1 + split + m2 + comma + n1 + split + n2 + comma + o1 + split + o2 + comma + p1 + split + p2 + comma + q1 + split + q2 + comma + r1 + split + r2 + comma + s1 + split + s2 + end;

	alert('{' + intakeLogData + ',' + submissions + '}')
}





