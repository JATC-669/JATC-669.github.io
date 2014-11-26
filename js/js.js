
function init() {

	/* Party Name
	/* Finds partyName cell and appends the name to the text node child 
	var partyName = document.getElementById('partyName');
	var name = document.createTextNode("Collins");
	partyName.appendChild(name);

	/* Finds partySize cell and appends the quantity to the text node child 
	var partySize = document.getElementById('partySize');
	var size = document.createTextNode(6);
	partySize.appendChild(size);

	/* Finds seatingRequest cell and appends the seating Type to the text node child 
	var seatingRequest = document.getElementById('seatingRequest');
	var seatingType = document.createTextNode('value');
	seatingRequest.appendChild(seatingType);

	/* Finds seatingRequest cell and appends the seating Type to the text node child
	
	var sec = 50;

	function stopwatch(){
		for (i = 0; i < 100; i++) {
				var output = i + 1;
				return output;
		}
	}


	var timeWaited = document.getElementById('timeWaited');
	var counter = document.createTextNode(stopwatch());
	timeWaited.appendChild(counter);

	/* Time Calculator 

	var currentdate = Date();
	var dateLength = currentdate.length;

	var dateSplit = currentdate.split(" ");

	var timeSplit = dateSplit[4].split(":");



	document.getElementById("dateTime").innerHTML = timeSplit[0] + " : " + timeSplit[1] + " : " + timeSplit[2];
	document.getElementById("partySize").innerHTML = timeSplit;
*/		
}
	
function addNewParty() {

	var nameInput = document.getElementById('nameInput').value;
	var sizeInput = document.getElementById('sizeInput').value;
	var seatingInput = document.getElementById('seatingInput').value;
	
	var newRow = document.createElement("tr");

	var newName = document.createElement("td");
	var newSize = document.createElement("td");
	var newSeatingType = document.createElement("td");
	var newWaited = document.createElement("td");
	var newCancel= document.createElement("td");
	var newReorder = document.createElement("td");
	var newCall = document.createElement("td");

	var partyName = document.createTextNode(nameInput);
	var partySize = document.createTextNode(sizeInput);
	var partySeatingType = document.createTextNode(seatingInput);
	var partyWaited = document.createTextNode("time");
	var partyCancel = document.createTextNode("Cancel");
	var partyReorder = document.createTextNode("up down");
	var partyCall = document.createTextNode("call");


	newName.appendChild(partyName);
	newSize.appendChild(partySize);
	newSeatingType.appendChild(partySeatingType);
	newWaited.appendChild(partyWaited);
	newCancel.appendChild(partyCancel);
	newReorder.appendChild(partyReorder);
	newCall.appendChild(partyCall);

	var resTable = document.getElementById('reservationTable');

	resTable.appendChild(newRow);
	
	newRow.appendChild(newName);
	newRow.appendChild(newSize);
	newRow.appendChild(newSeatingType);
	newRow.appendChild(newWaited);
	newRow.appendChild(newCancel);
	newRow.appendChild(newReorder);
	newRow.appendChild(newCall);


	
	
	newTd.appendChild(t);

}


