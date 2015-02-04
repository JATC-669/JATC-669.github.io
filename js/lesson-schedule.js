function courseScript() {
	
	/* Lesson or Final 
	var courseSelection = document.getElementById('course');
	var course = courseSelection.value;

	var lessonSub = document.getElementById('lessonSub');
	var finalSub = document.getElementById('finalSub');


	switch (courseSelection.value) {
    case '01':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '02':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '03':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '04':
        lessonSub.removeAttribute('disabled');
        break;
    case '05':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '06':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '07':
        lessonSub.removeAttribute('disabled');
        break;
    case '08':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '09':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '10':
        lessonSub.removeAttribute('disabled');
        break;
    case '11':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '12':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '13':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '14':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '15':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '16':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '17':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '18':
        lessonSub.disabled=true;
        lessonSub.setAttribute('disabled', 'disabled');
        finalSub.selected=true;
        break;
    case '19':
        lessonSub.removeAttribute('disabled');
        break;
	}

	*/

	/* DATES Entry*/
	var monthField = document.getElementById('month')
	var month = monthField.value;

	var twentyeight = document.getElementById('twentyeight')
	var twentynine = document.getElementById('twentynine');
	var thirty = document.getElementById('thirty');
	var thirtyone = document.getElementById('thirtyone');

	switch (monthField.value) {

	// Jan 31
    case '01':
    	twentynine.removeAttribute('disabled');
    	twentynine.setAttribute('style', 'visibility: visible;');
    	thirty.removeAttribute('disabled');
    	thirty.setAttribute('style', 'visibility: visible;');
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: visible;');
        break;

    // Feb 28
    case '02':
    	twentyeight.setAttribute('selected', 'selected')
    	twentynine.disabled=true;
        twentynine.setAttribute('disabled', 'disabled');
        twentynine.setAttribute('style', 'visibility: hidden;');
        thirty.disabled=true;
        thirty.setAttribute('disabled', 'disabled');
        thirty.setAttribute('style', 'visibility: hidden;');
        thirtyone.disabled=true;
        thirtyone.setAttribute('disabled', 'disabled');
        thirtyone.setAttribute('style', 'visibility: hidden;');
        break;

    // March 31
    case '03':
    	twentynine.removeAttribute('disabled');
    	twentynine.setAttribute('style', 'visibility: visible;');
    	thirty.removeAttribute('disabled');
    	thirty.setAttribute('style', 'visibility: visible;');
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: visible;');
        break;

    // April 30
    case '04':
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: hidden;');
        break;

    // May 31
    case '05':
    	twentynine.removeAttribute('disabled');
    	twentynine.setAttribute('style', 'visibility: visible;');
    	thirty.removeAttribute('disabled');
    	thirty.setAttribute('style', 'visibility: visible;');
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: visible;');
        break;
    
    // June 30
    case '06':
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: hidden;');
        break;

    // July 31
    case '07':
    	twentynine.removeAttribute('disabled');
    	twentynine.setAttribute('style', 'visibility: visible;');
    	thirty.removeAttribute('disabled');
    	thirty.setAttribute('style', 'visibility: visible;');
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: visible;');
        break;
    
    // Aug 31
    case '08':
    	twentynine.removeAttribute('disabled');
    	twentynine.setAttribute('style', 'visibility: visible;');
    	thirty.removeAttribute('disabled');
    	thirty.setAttribute('style', 'visibility: visible;');
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: visible;');
        break;

    // Sept 30
    case '09':
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: hidden;');
        break;
    
    // Oct 31
    case '10':
    	twentynine.removeAttribute('disabled');
    	twentynine.setAttribute('style', 'visibility: visible;');
    	thirty.removeAttribute('disabled');
    	thirty.setAttribute('style', 'visibility: visible;');
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: visible;');
        break;

    // Nov 30
    case '11':
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: hidden;');
        break;
    
    // Dec 31
    case '12':
    	twentynine.removeAttribute('disabled');
    	twentynine.setAttribute('style', 'visibility: visible;');
    	thirty.removeAttribute('disabled');
    	thirty.setAttribute('style', 'visibility: visible;');
    	thirtyone.removeAttribute('disabled');
    	thirtyone.setAttribute('style', 'visibility: visible;');
        break;
	}
	
}

function findDates() {
	var dStart = new Date();
    

	var enteredShipMonth = document.getElementById('month');
	var enteredShipDate = document.getElementById('day');
	var enteredShipFullYear = document.getElementById('year');

    dStart.setMonth(enteredShipMonth.value - 1)
    dStart.setDate(15);
    alert(dStart)
}


