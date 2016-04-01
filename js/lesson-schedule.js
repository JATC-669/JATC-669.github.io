
function valad() {
    var courseNumber = document.getElementById('course').value;
    var submissionType = document.getElementById('type').value;
    var shipMonth = document.getElementById('month').value;
    var shipDay = document.getElementById('day').value;
    var shipYear = document.getElementById('year').value;

    if (courseNumber === 'dis' || submissionType === 'dis' || shipMonth === 'dis' || shipDay === 'dis' || shipYear === 'dis') {
    }

    else {
        document.getElementById('submitButton').className = 'expand';
        document.getElementById('submitButton').innerHTML = 'SUBMIT';
    }
};

function badClick() {
    var courseNumber = document.getElementById('course').value;
    var submissionType = document.getElementById('type').value;
    var shipMonth = document.getElementById('month').value;
    var shipDay = document.getElementById('day').value;
    var shipYear = document.getElementById('year').value;

    if (courseNumber === 'dis' || submissionType === 'dis' || shipMonth === 'dis' || shipDay === 'dis' || shipYear === 'dis') {

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

    if (courseNumber === '04' || courseNumber === '07' || courseNumber === '19') {
        shipDate === shipDate.setDate(shipDate.getDate()+14+5);

        if (shipDate.getDay() === 6) {
            shipDate === shipDate.setDate(shipDate.getDate()+2);
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your lessons will be graded around:<br><strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>.<br> You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
        }

        else if (shipDate.getDay() === 0) {
            shipDate === shipDate.setDate(shipDate.getDate()+1);
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your lessons will be graded around:<br><strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>.<br> You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
        }

        else {
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your lessons will be graded around:<br><strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>.<br> You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
        }
    }

    else if (submissionType.value === 'l') {
        shipDate === shipDate.setDate(shipDate.getDate()+1);
        output.innerHTML = 'Your online submission should be uploaded and recorded. You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
    }

    else if (submissionType.value === 'f') {
        shipDate === shipDate.setDate(shipDate.getDate()+14+1);

        if (shipDate.getDay() === 6) {
            shipDate === shipDate.setDate(shipDate.getDate()+2);
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your final will be graded around:<br><strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>.<br> You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
        }

        else if (shipDate.getDay() === 0) {
            shipDate === shipDate.setDate(shipDate.getDate()+1);
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your final will be graded around:<br><strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>.<br> You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
        }

        else {
            var weekday = dateStringCreator(shipDate.getDay());
            var month = monthStringCreator(shipDate.getMonth());

            output.innerHTML = 'Your final will be graded around:<br><strong> ' + weekday + ',&nbsp;' + month + '&nbsp;' + shipDate.getDate() + ', ' + shipDate.getFullYear() + '</strong>.<br> You can check your status on the <a href="https://jatc669.wccnet.edu/login/index.php">Testing Website</a>.';
        }
    }  
}
