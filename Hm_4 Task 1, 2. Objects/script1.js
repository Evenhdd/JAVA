
function Time (hours, min, sec) {
    this.hours = hours || 0;
    this.min = min || 0;
    this.sec = sec || 0;

    this.display = () => { 
        let h = this.hours <= 9 ? '0' + this.hours : this.hours; 
        let m = this.min <= 9 ? '0' + this.min : this.min; 
        let s = this.sec <= 9 ? '0' + this.sec : this.sec;

        console.log(`${h}:${m}:${s}`);
    }

    this.addOneSecond = () => {

        if (this.sec >= 59){

            this.sec = 0; 
            this.min++;

            if (this.min >= 60){

                this.min = 0; 
                this.hours++;
            }
        } else {
            this.sec++;
        }   
    }

    this.subtractOneSecond = () => {

        if (this.sec <= 0){

            this.sec = 59; 
            this.min--;

            if (this.min <= 0){

                this.min = 59; 
                this.hours--;
            }
        } else {
            this.sec--;
        } 
    }

    this.displayUsingDocumentWrite = () => {
        let h = this.hours <= 9 ? '0' + this.hours : this.hours; 
        let m = this.min <= 9 ? '0' + this.min : this.min; 
        let s = this.sec <= 9 ? '0' + this.sec : this.sec;

        let str = `${h}:${m}:${s}`
        document.write(str);
    }
}

let t = new Time(9, 59, 59);

t.display();
t.addOneSecond();
t.display();

console.log('--------')

let c = new Time(9, 0, 0);

c.display();
c.subtractOneSecond();
c.display();

c.displayUsingDocumentWrite();

