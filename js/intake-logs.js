var entryLog = document.getElementById('entryLog');
var stuId;
var fName;
var lName;
var courseName;
var lessons;
var graderInfoTable = document.getElementById('graderInfoTable');
var graderLessonsReceived = document.getElementById('graderLessonsReceived');
var graderDueDate = document.getElementById('graderDueDate');
var graderCourseNumber = document.getElementById('graderCourseNumber');
var totalGraderLessons = document.getElementById('totalGraderLessons');
var dueDate = document.getElementById('dueDate');
var totalGraderPay = document.getElementById('totalGraderPay');
var weekEndingDate = document.getElementById('weekEndingDate');
var weekEndingValue = document.getElementById('weekEndingValue');
var graderNameValue = document.getElementById('graderNameValue');
var graderName = document.getElementById('graderName');

// Creates an init due date for lessons to be returned. 
function setInitDates() {

	Date.prototype.addDays = function(days)
	{
	    var dat = new Date(this.valueOf());
	    dat.setDate(dat.getDate() + days);
	    return dat;
	}

	var dat = new Date();
	var newDueDate = dat.addDays(3);

	if (newDueDate.getDay() === 6) {
		newDueDate = dat.addDays(3 + 2);
		dueDate.value = (newDueDate.getMonth() + 1)  + '/' + newDueDate.getDate() + '/' + newDueDate.getFullYear();
	}

	else if (newDueDate.getDay() === 0) {
		newDueDate = dat.addDays(3 + 1);
		dueDate.value = newDueDate;
	}

	else {
		dueDate.value = newDueDate;
	}
}

function clearValues() {
	document.getElementById('stuId').value = '';
	document.getElementById('fName').value = '';
	document.getElementById('lName').value = '';
	document.getElementById('lessons').value = '';
}

function tallyLessons(x) {
	var rl = intakeLog.rows.length;
	var added = 0;

		for (var i = 1; i < rl; i++) {
			cell = Number(intakeLog.rows[i].cells[7].innerHTML);
			added = added + cell;
		}

		//cell = Number(intakeLog.rows[2].cells[7].innerHTML)
		//x = cell + cell

	return added;
}

function createGraderInfo() {

	weekEndingDate.innerHTML = 'Week Ending:&nbsp;' + weekEndingValue.value;
	graderName.innerHTML = graderNameValue.value + '&nbsp-&nbsp';
	var entDate = new Date();
	graderInfoTable.style.display = "table";
	graderLessonsReceived.innerHTML = (entDate.getMonth() + 1) + '/' + entDate.getDate() + '/' + entDate.getFullYear();
	graderDueDate.innerHTML = dueDate.value;
	graderCourseNumber.innerHTML = document.getElementById('courseName').value;
	totalGraderLessons.innerHTML = tallyLessons();
	totalGraderPay.innerHTML =  '$' + (totalGraderLessons.innerHTML * 3.50).toFixed(2);
}


function splitLessons(x) {
	var splitLessons = x.split(/[ ,]+/);

	return splitLessons;
}

function totalLessons(y) {
	
	var splitLessons = y.split(/[ ,]+/);
	var spltLessonsLength = splitLessons.length;
	var lessonTotalOutput = [];
	var total = 0;

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

function addEntry() {


	var entId = ' ';
	var stuId = document.getElementById('stuId').value;
	var fName = document.getElementById('fName').value;
	var lName = document.getElementById('lName').value;
	var courseName = document.getElementById('courseName').value;
	var lessons = document.getElementById('lessons').value;

	// VALADATION
	document.getElementById('stuId').style.border = '1px solid #ccc';
	document.getElementById('stuId').style.padding = '3px';
	document.getElementById('fName').style.border = '1px solid #ccc';
	document.getElementById('fName').style.padding = '3px';
	document.getElementById('lName').style.border = '1px solid #ccc';
	document.getElementById('lName').style.padding = '3px';
	document.getElementById('lessons').style.border = '1px solid #ccc';
	document.getElementById('lessons').style.padding = '3px';
	if (stuId === '') {
		document.getElementById('stuId').style.border = '1px solid red';}
		else if (fName === '') {document.getElementById('fName').style.border = '1px solid red';}
		else if (lName === '') {document.getElementById('lName').style.border = '1px solid red';}
		else if (courseName === 'COURSE') {alert('You did not select a course');}
	// END VALADATION

		else {run(entId, stuId, fName, lName, courseName, lessons);
	}

	document.getElementById('stuId').focus();	
}

function run(entId, stuId, fName, lName, courseName, lessons) {
	
	var entDate = new Date();
	var entry = {
		stuId: stuId,
		first: fName,
		last: lName,
		course: courseName,
		lesson: lessons,
	};

	var row = entryLog.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell2.className = 'hidden'; // Hides timestamp
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);

	cell1.innerHTML = (entDate.getMonth() + 1) + '/' + entDate.getDate() + '/' + entDate.getFullYear();
	cell1.className = "hide-for-print";
	cell2.innerHTML = entDate.getTime();
	cell3.innerHTML = '@00' + entry.stuId;
	cell4.innerHTML = entry.last;
	cell5.innerHTML = entry.first;
	cell6.innerHTML = entry.course;
	cell7.innerHTML = splitLessons(entry.lesson);
	cell7.style.textAlign = 'center';
	cell8.innerHTML = totalLessons(entry.lesson);
	cell8.style.textAlign = 'center';
	cell9.innerHTML = '$' + (totalLessons(entry.lesson) * 3.50).toFixed(2);
	cell9.style.textAlign = 'right';
	var rowNumber = entryLog.childNodes.length;
	cell10.innerHTML = '<button onclick="deleteRow(this)" class="hide-for-print">DELETE</button>';
	cell10.className = "hide-for-print";
	
	clearValues(); // Wipes fields for next entry

	createGraderInfo(); // Populates Grader Info Table
}

function upload() {

	// Creates arrarys for the headers and rows
	var jsonArrayHeaders = [];
	var jsonArrayValues = [];
	var intakeLog = document.getElementById('intakeLog');
	var numberOfRows = intakeLog.rows.length;
	var numberOfCells = document.getElementById('intakeLog').rows[0].cells.length - 1;
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
		jsonOutput.submissions.push('{' + '"' + jsonArrayHeaders[0] + '":"' + jsonArrayValues[a][0] + '", ' + '"' + jsonArrayHeaders[1] + '":"' + jsonArrayValues[a][1] + '", ' + '"' + jsonArrayHeaders[2] + '":"' + jsonArrayValues[a][2] + '", ' + '"' + jsonArrayHeaders[3] + '":"' + jsonArrayValues[a][3] + '", ' + '"' + jsonArrayHeaders[4] + '":"' + jsonArrayValues[a][4] + '", ' + '"' + jsonArrayHeaders[5] + '":"' + jsonArrayValues[a][5] + '", ' + '"' + jsonArrayHeaders[6] + '":"' + jsonArrayValues[a][6] + '", ' + '"' + jsonArrayHeaders[7] + '":"' + jsonArrayValues[a][7] + '", ' + '"' + jsonArrayHeaders[8] + '":"' + jsonArrayValues[a][8] + '"}');
	}

	var jsonFormated = '{"submissions":[' + jsonOutput.submissions + ']}';
	alert(jsonFormated);
}

function deleteRow(t) {
	var row = t.parentNode.parentNode;
    document.getElementById("intakeLog").deleteRow(row.rowIndex);

    createGraderInfo();
}
function selectGrader() {
	var today = new Date()
	var dayOfWeek = today.getDay();
	var courseName = document.getElementById('courseName')
	var graderNameValue = document.getElementById('graderNameValue')
	
	if ((courseName.value === "04" && dayOfWeek === 1) || (courseName.value === "04" && dayOfWeek === 3) || (courseName.value === "04" && dayOfWeek === 5)){
		document.getElementById('grader1').selected = true;
	}

	else if ((courseName.value === "04" && dayOfWeek === 2) || (courseName.value === "04" && dayOfWeek === 4)){
		document.getElementById('grader2').selected = true;
	}

	else if ((courseName.value === "07" && dayOfWeek === 1) || (courseName.value === "07" && dayOfWeek === 3) || (courseName.value === "07" && dayOfWeek === 5)){
		document.getElementById('grader3').selected = true;
	}

	else if ((courseName.value === "07" && dayOfWeek === 2) || (courseName.value === "07" && dayOfWeek === 4)){
		document.getElementById('grader4').selected = true;
	}

	else if (courseName.value === "19") {
		document.getElementById('grader5').selected = true;
	}
}








