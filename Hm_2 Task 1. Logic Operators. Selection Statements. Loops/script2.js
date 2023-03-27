const year = +prompt('Enter the year');

(year % 4 === 0 && year % 100 != 0) || year % 400 === 0 ? alert('Year ' + year + ' is leap') : alert(year + ' is NOT leap');
