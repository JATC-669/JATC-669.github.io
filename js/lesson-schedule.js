function init() {

	var monthPicker = document.getElementById('monthPicker');
	var dayPicker = document.getElementById('dayPicker');
	var yearPicker = document.getElementById('yearPicker');


	var thirtyDayMonth = document.createElement('option');

	var dayPicker = document.getElementById('dayPicker');
	
	dayPicker.appendChild(thirtyDayMonth);
	
	alert(dayPicker.childNodes[0]);
		
}