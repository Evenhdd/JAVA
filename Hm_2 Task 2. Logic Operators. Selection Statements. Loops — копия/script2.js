
const enteredNumber = prompt('Enter the number: ')

let enteredNumberArr = enteredNumber.split('');

let result = 0;

for (let i = 0; i < enteredNumberArr.length; i++) {

    if (!isNaN(parseInt(enteredNumberArr[i]))) {
        result ++;
    } 
}
result === 0 ? alert('There is no digits in your number') : alert('The number of digits in this number is ' + result);

