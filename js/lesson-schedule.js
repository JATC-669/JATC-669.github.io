/*global document: false */

// Allows submission if all fields are filled out
function valad() {
    'use strict';
    // Sets vars for the inputs in the fields
    var courseNumber = document.getElementById('course').value;
    var submissionType = document.getElementById('type').value;
    var shipMonth = document.getElementById('month').value;
    var shipDay = document.getElementById('day').value;
    var shipYear = document.getElementById('year').value;
    var shipMethod = document.getElementById('method').value;
    document.getElementById('recTimeOutput').className = 'recTimeOutput not-fade';

    // Values for the shipping method
    var initShipMethod = document.getElementById('initShipMethod');
    var regGround = document.getElementById('regGround');
    var twoDay = document.getElementById('twoDay');
    var nextDay = document.getElementById('nextDay');
    var onlineSubmission = document.getElementById('onlineSubmission');

    // When any field is changed, check to see if the shipping method should change. If there are empty fields don't change the submit button
    if (courseNumber === 'dis' || submissionType === 'dis' || shipMonth === 'dis' || shipDay === 'dis' || shipYear === 'dis' || shipMethod === 'dis')
    {     
        // Changes shipping method options if its a handgraded course
        if ((courseNumber === '04' || courseNumber === '07' || courseNumber === '19')) {      
            initShipMethod.disabled = true;
            onlineSubmission.disabled = true;          
            twoDay.disabled = false;
            nextDay.disabled = false;
            regGround.disabled = false;
            onlineSubmission.selected = false;
        }

        // Changes shipping method options if its a final from an online course
        else if ((submissionType === 'f') && (courseNumber != '04' || courseNumber != '07' || courseNumber != '19')) {       
            initShipMethod.disabled = true;
            onlineSubmission.disabled = true;
            twoDay.disabled = false;
            nextDay.disabled = false;
            regGround.disabled = false;
            onlineSubmission.selected = false;
        }

        // Changes shipping method options if its a online submission
        else  {
            initShipMethod.disabled = true;    
            twoDay.disabled = true;
            nextDay.disabled = true;
            regGround.disabled = true;
            onlineSubmission.selected = true;
        }
    }

    // When any field is changed, check to see if the shipping method should change. Change the submit button
    else
    {
        if ((courseNumber === '04' || courseNumber === '07' || courseNumber === '19')) {    
            initShipMethod.disabled = true;
            onlineSubmission.disabled = true;  
            twoDay.disabled = false;
            nextDay.disabled = false;
            regGround.disabled = false;
            onlineSubmission.selected = false;
            document.getElementById('submitButton').className = 'expand';
            document.getElementById('submitButton').innerHTML = 'SUBMIT';

        }

        else if ((submissionType === 'f') && (courseNumber != '04' || courseNumber != '07' || courseNumber != '19')) {
            initShipMethod.disabled = true;
            onlineSubmission.disabled = true;
            twoDay.disabled = false;
            nextDay.disabled = false;
            regGround.disabled = false;
            onlineSubmission.selected = false;
            document.getElementById('submitButton').className = 'expand';
            document.getElementById('submitButton').innerHTML = 'SUBMIT';
        }

        else if ((submissionType === 'l') && (courseNumber != '04' || courseNumber != '07' || courseNumber != '19')) {
            initShipMethod.disabled = true;
            twoDay.disabled = true;
            nextDay.disabled = true;
            regGround.disabled = true;
            onlineSubmission.disabled = false;
            onlineSubmission.selected = true;
            document.getElementById('submitButton').className = 'expand';
            document.getElementById('submitButton').innerHTML = 'SUBMIT';
        }
    }
}

function courseScript() {
    var courseNumber = document.getElementById('course').value;
    var submissionType = document.getElementById('type');
    var shipMonth = document.getElementById('month');
    var shipDay = document.getElementById('day');
    var shipYear = document.getElementById('year');
    var shipMethod = document.getElementById('method').value;
    var shipMethodNumber = Number(shipMethod);
    var output = document.getElementById('recTimeOutput');
    var shipDate = new Date(shipYear.value, shipMonth.value, shipDay.value);
    var weekday;
    var month;
    var shippingDays = parseInt(shipMethod);

    var processDate = new Date(shipYear.value, shipMonth.value, shipDay.value);


    var gradedDate = new Date();

    var gradingDays = 5;
  
    function dateStringCreator(day) {
        var weekday = new Array(7);
            weekday[0]=  "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            return weekday[day];
    }
    
    function monthStringCreator(month) {
        var theMonth = new Array(12);
            theMonth[0]=  "Jan";
            theMonth[01]=  "Feb";
            theMonth[02]=  "Mar";
            theMonth[03]=  "Apr";
            theMonth[04]=  "May";
            theMonth[05]=  "Jun";
            theMonth[06]=  "Jul";
            theMonth[07]=  "Aug";
            theMonth[08]=  "Sept";
            theMonth[09]=  "Oct";
            theMonth[10]=  "Nov";
            theMonth[11]=  "Dec";
            return theMonth[month];
    }

    // If a submission, lesson or final, is from SPF 4, 7 or 19
    if (courseNumber === '04' || courseNumber === '07' || courseNumber === '19') {
      
        processDate.setDate(shipDate.getDate()+shippingDays+gradingDays);

        // If the upload date falls on a Sat then add two days
        if (processDate.getDay() === 6) {
            processDate.setDate(processDate.getDate()+2);

            weekday = dateStringCreator(processDate.getDay());
            month = monthStringCreator(processDate.getMonth());
            output.innerHTML = 'Estimated date of grade posting:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + processDate.getDate() + ', ' + processDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutputShown fade';
        }

        // If the upload date falls on a Sun then add one day
        else if (processDate.getDay() === 0) {
            processDate.setDate(processDate.getDate()+1);

            weekday = dateStringCreator(processDate.getDay());
            month = monthStringCreator(processDate.getMonth());
            output.innerHTML = 'Estimated date of grade posting:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + processDate.getDate() + ', ' + processDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutputShown fade';
        }

        // If the upload date falls on a weekday, add no days
        else {
            weekday = dateStringCreator(processDate.getDay());
            month = monthStringCreator(processDate.getMonth());
            output.innerHTML = 'Estimated date of grade posting:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + processDate.getDate() + ', ' + processDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutputShown fade';
        }
    }

    // If the submission is an online lesson
    else if (submissionType.value === 'l') {
        shipDate = shipDate.setDate(shipDate.getDate());
        output.innerHTML = 'Your online submission should be uploaded and recorded. You can check your status on the <a href="https://jatc669.wccnet.edu/">Testing Website</a>.';
        document.getElementById('recTimeOutput').className = 'recTimeOutputShown fade';
    }

    // If the submission is a final from an online course
    else if (submissionType.value === 'f') {
        processDate.setDate(shipDate.getDate()+shippingDays);

        if (processDate.getDay() === 6) {
            processDate.setDate(processDate.getDate()+2);
            weekday = dateStringCreator(processDate.getDay());
            month = monthStringCreator(processDate.getMonth());
            output.innerHTML = 'Estimated date of grade posting:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + processDate.getDate() + ', ' + processDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutputShown fade';  
        }

        // If the upload date falls on a Sun then add one day
        else if (processDate.getDay() === 0) {
            processDate.setDate(processDate.getDate()+1);
            weekday = dateStringCreator(processDate.getDay());
            month = monthStringCreator(processDate.getMonth());
            output.innerHTML = 'Estimated date of grade posting:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + processDate.getDate() + ', ' + processDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutputShown fade';
        }

        // If the upload date falls on a weekday, add no days
        else {
            weekday = dateStringCreator(processDate.getDay());
            month = monthStringCreator(processDate.getMonth());
            output.innerHTML = 'Estimated date of grade posting:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + processDate.getDate() + ', ' + processDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutputShown fade';
            document.getElementById('submitButton').className = 'expand';
        }
    }

    else {

    }
}

function badClick() {

    var courseNumber = document.getElementById('course').value;
    var submissionType = document.getElementById('type').value;
    var shipMonth = document.getElementById('month').value;
    var shipDay = document.getElementById('day').value;
    var shipYear = document.getElementById('year').value;
    var shipMethod = document.getElementById('method').value;

    if (courseNumber === 'dis' || submissionType === 'dis' || shipMonth === 'dis' || shipDay === 'dis' || shipYear === 'dis' || shipMethod === 'dis'){

        document.getElementById('submitButton').innerHTML = 'YOU HAVE UNSELECTED FIELDS';
    }

    else {
        courseScript();
    }
}
