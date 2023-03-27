
// ---------- Method by using Date object ----------

let enteredDate = prompt('Enter the date in format: "day. month. year"');

let date = new Date(enteredDate.split('.').reverse());

const btnNextYear = document.querySelector('#nextYear');
const btnNextMonth = document.querySelector('#nextMonth');
const btnNextLeapYear = document.querySelector('#nextLeapYear');

let enteredYear = date.getFullYear();
let enteredMonth = date.getMonth();

btnNextYear.onclick = ()=> {

    date.setFullYear(++enteredYear);
    alert('Your date after one year is ' + date);  
}

btnNextMonth.onclick = ()=> {

    if (date.getMonth() == 11) {

        date.setMonth(0);
        date.setFullYear(++enteredYear);
        alert('Your date after one month is ' + date);  
    } else {
        date.setMonth(++enteredMonth);
        alert('Your date after one month is ' + date);  
    }
}

btnNextLeapYear.onclick = ()=> {

    while (!((enteredYear % 4 === 0 && enteredYear % 100 != 0) || enteredYear % 400 === 0)) {
        enteredYear++;
    }

    date.setFullYear(enteredYear);
    alert('Your next date with leap year is ' + date);  
}


// ---------- Method without using Date object ----------

/*
let enteredDate = prompt('Enter the date in format: "day. month. year"');

let enteredDateArr = enteredDate.split('.');

let day = enteredDateArr[0];
let month = enteredDateArr[1];
let year = enteredDateArr[2];

const btnNextYear = document.querySelector('#nextYear');
const btnNextMonth = document.querySelector('#nextMonth');
const btnNextLeapYear = document.querySelector('#nextLeapYear');

btnNextYear.onclick = ()=> {

    year++;
    alert(`Your date after one year is ${day}.${month}.${year}`);
}

btnNextMonth.onclick = ()=> {

    if (month == 12) {
        month = '01';
        year++;
        alert(`Your date after one month is ${day}.${month}.${year}`);
    } else{
        month++;
        month = '0' + month;
        alert(`Your date after one month is ${day}.${month}.${year}`);
    }
}

btnNextLeapYear.onclick = ()=> {

    while (!((year % 4 === 0 && year % 100 != 0) || year % 400 === 0)) {
        year++;
    }
    alert(`Your next date with leap year is ${day}.${month}.${year}`);     
}
*/