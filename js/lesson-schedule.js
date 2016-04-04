function valad() {

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

    // When any field is changed, check to unchanged fields. I think this is where the issue is.
    if (courseNumber === 'dis' || submissionType === 'dis' || shipMonth === 'dis' || shipDay === 'dis' || shipYear === 'dis' || shipMethod === 'dis')
    {     


        if ((courseNumber === '04' || courseNumber === '07' || courseNumber === '19')) {
            
            initShipMethod.disabled = true;
            onlineSubmission.disabled = true;
            
            twoDay.disabled = false;
            nextDay.disabled = false;
            regGround.disabled = false;

            regGround.selected = true;
            onlineSubmission.selected = false;

        }

        else if ((submissionType === 'f') && (courseNumber != '04' || courseNumber != '07' || courseNumber != '19')) {
            
            initShipMethod.disabled = true;
            onlineSubmission.disabled = true;
            
            twoDay.disabled = false;
            nextDay.disabled = false;
            regGround.disabled = false;

            regGround.selected = true;
            onlineSubmission.selected = false;
        }

        else  {

            initShipMethod.disabled = true;
            
            twoDay.disabled = true;
            nextDay.disabled = true;
            regGround.disabled = true;

            onlineSubmission.selected = true;

        }
    }

    else
    {
        if ((courseNumber === '04' || courseNumber === '07' || courseNumber === '19')) {
            
            initShipMethod.disabled = true;
            onlineSubmission.disabled = true;
            
            twoDay.disabled = false;
            nextDay.disabled = false;
            regGround.disabled = false;

            regGround.selected = true;
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

            regGround.selected = true;
            onlineSubmission.selected = false;

            document.getElementById('submitButton').className = 'expand';
            document.getElementById('submitButton').innerHTML = 'SUBMIT';
        }

        else  {

            initShipMethod.disabled = true;
            
            twoDay.disabled = true;
            nextDay.disabled = true;
            regGround.disabled = true;

            onlineSubmission.selected = true;

            document.getElementById('submitButton').className = 'expand';
            document.getElementById('submitButton').innerHTML = 'SUBMIT';

        }
    };

};

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

function courseScript() {
    var courseNumber = document.getElementById('course').value;
    var submissionType = document.getElementById('type');
    var shipMonth = document.getElementById('month');
    var shipDay = document.getElementById('day');
    var shipYear = document.getElementById('year');
    var shipMethod = document.getElementById('method').value;

    var shipMethodNumber = Number(shipMethod);

    var output = document.getElementById('recTimeOutput');
    
    var shipDate = new Date(shipYear.value, shipMonth.value, shipDay.value)

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
            theMonth[00]=  "Jan";
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
        
        // Takes the ship date entered, adds the number of shipping days, adds 5 grading days
        shipDate === shipDate.setDate(shipDate.getDate()+shipMethodNumber+5);

        // If the upload date falls on a Sat then add two days
        if (shipDate.getDay() === 6) {
            shipDate === shipDate.setDate(shipDate.getDate()+2);
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());
            
            output.innerHTML = 'Your submission will be graded around: <strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutput fade';
        }

        // If the upload date falls on a Sun then add one day
        else if (shipDate.getDay() === 0) {
            shipDate === shipDate.setDate(shipDate.getDate()+1);
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your submission will be graded around:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutput fade';
        }

        // If the upload date falls on a weekday, add no days
        else {
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your submission will be graded around:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutput fade';
        }
    }

    // If the submission is an online lesson
    else if (submissionType.value === 'l') {
        shipDate === shipDate.setDate(shipDate.getDate());

        output.innerHTML = 'Your online submission should be uploaded and recorded. You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
        document.getElementById('recTimeOutput').className = 'recTimeOutput fade'

    }

    // If the submission is a final from an online course
    else if (submissionType.value === 'f') {
        shipDate === shipDate.setDate(shipDate.getDate()+shipMethodNumber+1);

        // If the upload date falls on a Sat then add two days
        if (shipDate.getDay() === 6) {
            shipDate === shipDate.setDate(shipDate.getDate()+2);
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your final will be graded around:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
        }

        // If the upload date falls on a Sun then add one day
        else if (shipDate.getDay() === 0) {
            shipDate === shipDate.setDate(shipDate.getDate()+1);
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your final will be graded around:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutput fade';
        }

        // If the upload date falls on a weekday, add no days
        else {
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your final will be graded around:<strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>. You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
            document.getElementById('recTimeOutput').className = 'recTimeOutput fade';
        }
    }


}
