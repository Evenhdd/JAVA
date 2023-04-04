
// I will use 'console.log(array)' instead of 'displayArray(array)' for better visual understanding in console

// ----- 1 -----
let array = new Array(20);

fillRandom(array);
// ----- 2 -----
console.log(array);
// ----- 3 -----
sortArrayInDescendingOrder(array);

console.log(array);
// ----- 5 -----
checkNumber7(array);
// ----- 6 -----
let newArr = removeFirstThreeElements(array);
console.log(newArr)
// ----- 7 -----
countEvenNumbers(array);
// ----- 8 -----
containsDuplicates(array);
// ----- 4 -----
fillSecondPartWithZeros(array);
console.log(array);


function fillRandom(arr) {

    for (let i = 0; i < arr.length; i++) {
        
        arr[i] = Math.floor(Math.random()*101);
    }
    return arr;
}

function displayArray (arr) {

    let j;

    for (let i = 0; i < arr.length; i++) {
        j = i;
        console.log(`[${++j}] - ${arr[i]} \n`);
    }
}

function sortArrayInDescendingOrder (arr) {
    arr.sort((a,b) => b-a); // The (a,b)=>a-b comparison function subtracts the 
//second item from the first item, thus returning a negative value if the second 
//item is bigger, a positive value if the second item is smaller, and 0 for equality.
}

function checkNumber7 (arr) {
    let contains = false;
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 7   === 0) {
            contains = true;
        } 
    }
    if(contains){
        console.log('Array contains a number that is a multiple of 7.')
    } else{
        console.log('Array doesn\'t contain a number that is a multiple of 7.')
    }
}

function removeFirstThreeElements (arr) {
    let arrWithoutThreeFirstElements;

    for (let i = 0; i <= 3; i++) {
        arrWithoutThreeFirstElements = arr.slice(i);
    }
    return arrWithoutThreeFirstElements;
}

function countEvenNumbers (arr) {
    let even = 0;

    for (let i = 0; i <= 3; i++) {
        if (arr[i] %2 === 0) {
            even++;
        }
    }

    if(even > 1){
        console.log(`There are ${even} even numbers in this array`);
    } else if (even === 1){
        console.log(`There is ${even} even number in this array`);
    } else {
        console.log(`There are no even numbers in this array`);
    }
}

function containsDuplicates(arr) {
    let contains = false;
    if (arr.length !== new Set(arr).size) {
        contains = true;
    }
    if (contains) {
        console.log('Array contains duplicates');
    } else {
        console.log('Array doesn\'t contains duplicates');
    }
}

function fillSecondPartWithZeros (arr) {
    let half = arr.length / 2;
    for (let i = half; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}