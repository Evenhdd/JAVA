
const enteredNumbers = prompt('Enter any 10 numbers: ')

let enteredNumbersArr = enteredNumbers.split(',');

let P = 0, N = 0, Z = 0, even = 0, odd = 0;

console.log(enteredNumbersArr);

for (let i = 0; i < enteredNumbersArr.length; i++) {
    
    enteredNumbersArr[i] < 0 ?  N++ : enteredNumbersArr[i] > 0 ? P++ : Z++;

    enteredNumbersArr[i] %2 === 0 && enteredNumbersArr[i] != 0 ? even++ : odd++;
    
    // if (enteredNumbersArr[i] > 0) {
    //     P++;
    // } if (enteredNumbersArr[i] < 0) {
    //     N++;
    // } if (enteredNumbersArr[i] == 0) {
    //     Z++;
    // } if (enteredNumbersArr[i] %2 === 0 && enteredNumbersArr[i] != 0) {
    //     even++;
    // } if (enteredNumbersArr[i] %2 !== 0) {
    //     odd++;
    // }
}
alert(`There are ${P} positive ${N} negative ${Z} zeros ${even} even ${odd} odd numbers`);

