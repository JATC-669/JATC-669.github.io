function load() {

	// Get the current date
	var date = new Date()
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();

	// Sets the value of the backDate field to the current date
	var backDateField = document.getElementById('backDate')
	backDateField.value = month + "/" + day + "/" + year;
}

function populateTable() {
	alert('hello')
}