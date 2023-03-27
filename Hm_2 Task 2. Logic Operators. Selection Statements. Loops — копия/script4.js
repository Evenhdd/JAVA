
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let day = 0;

while (day < daysOfWeek.length) {

    promptRes = prompt(`${daysOfWeek[day]}. Do you want to see the next day?`);
    
    if (promptRes !== null && day < 6) {
        day++;
    } else if (promptRes !== null && day === 6) {
        alert('This is the end of the week, we are going back to Monday...')
        day = 0;
    } else {
        break;
    }
}


