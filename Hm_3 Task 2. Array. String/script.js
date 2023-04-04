
const str = prompt('Enter any string:');

// ----- 1 -----
console.log(`The number of spaces: ${countNumberOfSpaces(str)}`);

// ----- 2 -----
capitalizeFirstLetter(str);

// ----- 3 -----
console.log(`The number of words: ${countNumberOfWords(str)}`);

// ----- 4 -----
console.log(`Abbreviation: ${convertToAbbreviation(str)}`);

// ----- 5 -----
console.log(checkPalindrome(str));

// ----- 6 -----
getUrlInfo(str);

function countNumberOfSpaces (str) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) === ' ') {
            count ++;
        }
    }

    return count;
}

function capitalizeFirstLetter (str) {
    let strWithFirstCapLetter = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(strWithFirstCapLetter);
}

function countNumberOfWords (str) {
    let count = str.split(' ').length;

    return count;
}

function convertToAbbreviation (str) {

    let strArr = str.replaceAll(' ', '-').split('-');
    let abbrevArr = [];

    for (let i = 0; i < strArr.length; i++) {
        abbrevArr += strArr[i].charAt(0).toUpperCase(); 
    }

    return abbrevArr;
}

function checkPalindrome(str) {

    return str === str.split('').reverse().join('');
}

function getUrlInfo (url) {
    //https://career.softserveinc.com/uk-ua/technology/course
    let protocol = url.split('://')[0]; // splitting string into 2-part array. [0] = https (before '://'), [1] = all else.
    let domain = url.split('://')[1].split('/')[0]; // splitting part without 'https://' by '/' and getting the array. Taking domain by using [0] (text before the first '/').
    let path = url.split('://')[1].split('/').slice(1).join('/'); // joining the remain parts array (without protocol and domain).
    
    console.log(`protocol: ${protocol} \ndomain: ${domain} \npath: ${path}`);  

}