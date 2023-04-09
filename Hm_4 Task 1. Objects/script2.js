
function Car (manufacturer, model, yearOfManufacture, averageSpeed) {
    
    this.manufacturer = manufacturer;
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
    this.averageSpeed = averageSpeed;

    this.display = () => {
        console.log(`Manufacturer: ${this.manufacturer}\nModel: ${this.model}\nYear of manufacture: ${this.yearOfManufacture}\nAverageSpeed: ${this.averageSpeed}`)
    }

    this.calculateTime = (distance) => {
        this.distance = distance;

        let requiredTime = this.distance / averageSpeed;

        for (let i = 4; i < requiredTime; i++) {
            
                requiredTime++;
                i += 4;
        }

        console.log(requiredTime.toFixed(2) + ' Hours');
    }
}

let car = new Car('Japan', 'Toyota', 2019, 120);
car.display();
car.calculateTime(481);