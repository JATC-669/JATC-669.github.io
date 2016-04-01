//Generates Current Date and adds it to the form
function getDate() {

	var dateGen = new Date();
	var date = (dateGen.getMonth() + 1) + '/' + dateGen.getDate() + '/' +  dateGen.getFullYear();

	document.getElementById('dateField').value = date;
}

// Adds Entered info to the list below
function addLog () {

// Identifies the input fields
var log = {
	date: 			document.getElementById("dateField"),
	studentId: 		document.getElementById("studentId"),
	lastName: 		document.getElementById("lastName"),
	firstName: 		document.getElementById("firstName"),
	course: 		document.getElementById("course"),
	lessons: 		document.getElementById("lessons"),
	finalIndicator: document.getElementById("finalIndicator")
	};

	// Creates an array with the field values
	var arr = [log.date.value,
			   '@' + log.studentId.value, 
			   log.lastName.value,
		  	   log.firstName.value,
		       log.course.value,
		       log.lessons.value,
		       log.finalIndicator.value];

	// Counts the number of <tr>'s in the report log
	var numberOfTrs = document.querySelectorAll('#intakeLog tr').length;


		// Creates a TR
		var tableRow                      = document.createElement('tr');

		// Creates cells for TR
		var tableCellloggedDate           = document.createElement('td');
		var tableCellloggedStudentId      = document.createElement('td');
		var tableCellloggedLastName 	  = document.createElement('td');
		var tableCellloggedFirstName 	  = document.createElement('td');
		var tableCellloggedCourse 		  = document.createElement('td');
		var tableCellloggedLessons 		  = document.createElement('td');
		var tableCellloggedfinalIndicator = document.createElement('td');

		// Add IDs to cells in TR
		tableCellloggedDate.id 		  = "loggedDate" + numberOfTrs;
		tableCellloggedStudentId.id   = "loggedStudentId" + numberOfTrs;
		tableCellloggedLastName.id 	  = "loggedLastName" + numberOfTrs;
		tableCellloggedFirstName.id   = "loggedFirstName" + numberOfTrs;
		tableCellloggedCourse.id   	  = "loggedCourse" + numberOfTrs;
		tableCellloggedLessons.id   	  = "loggedLessons" + numberOfTrs;
		tableCellloggedfinalIndicator.id   	  = "loggedfinalIndicator" + numberOfTrs;

		tableRow.id = "row" + numberOfTrs++;
		var report = document.getElementById('intakeLog');
		
		// Appends Table Row to the report
		report.appendChild(tableRow);

		// Appends the cells to the Table ROw
		tableRow.appendChild(tableCellloggedDate);
		tableRow.appendChild(tableCellloggedStudentId);
		tableRow.appendChild(tableCellloggedLastName);
		tableRow.appendChild(tableCellloggedFirstName);
		tableRow.appendChild(tableCellloggedCourse);
		tableRow.appendChild(tableCellloggedLessons);
		tableRow.appendChild(tableCellloggedfinalIndicator);
		

	

	// alert(numberOfTrs)

	document.getElementById("loggedDate" + (numberOfTrs - 1)).innerHTML 	      = arr[0];
	document.getElementById("loggedStudentId" + (numberOfTrs - 1)).innerHTML 	  = arr[1];
	document.getElementById("loggedLastName" + (numberOfTrs - 1)).innerHTML  	  = arr[2];
	document.getElementById("loggedFirstName" + (numberOfTrs - 1)).innerHTML 	  = arr[3];
	document.getElementById("loggedCourse" + (numberOfTrs - 1)).innerHTML 		  = arr[4];
	document.getElementById("loggedLessons" + (numberOfTrs - 1)).innerHTML 		  = arr[5];
	document.getElementById("loggedfinalIndicator" + (numberOfTrs - 1)).innerHTML = arr[6];

}