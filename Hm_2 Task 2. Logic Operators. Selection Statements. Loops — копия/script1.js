
const enteredNumbers = prompt('Enter the range of numbers to sum: "1st, 2nd"')

let enteredNumbersArr = enteredNumbers.split(',');

let num1 = parseInt(enteredNumbersArr[0]);
let num2 = parseInt(enteredNumbersArr[1]);

let result = 0;

while (num1 <= num2) {
    result += num1;
    num1++;
}

alert('Sum of numbers in this range is ' + result);
