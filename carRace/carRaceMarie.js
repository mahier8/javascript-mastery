// Maries code
//ES6
class Car {
    constructor (inMake, inModel, inEngine, inDoors) {
        this.make = inMake;
        this.model = inModel;
        this.engine = inEngine;
        this.doors = inDoors;
        this.speed = 0;
    }
    addSpeed = function (newSpeed) {
        this.speed = this.speed + newSpeed;
    }
}


class Race {
    constructor(inCarsArr) {
        this.allCars = inCarsArr;
        this.numLaps = 10;
        this.lapLength = 2000;
    }
    startRace () {
        for(let i=0; i<this.allCars.length; i++){
            let thisCar = this.allCars[i];
            thisCar.distance = 0;
            this.lapTime = 0;
        }
        for(let lap=0 ; lap<this.numLaps; lap++){
            console.log("\n ==============", "Lap : " + (lap +1) + "==============");
            this.doLap(lap);
            this.printPositions();
        }
    }
    doLap (lapNum) {
        // adjust the speed of the cars
        for(let i=0; i<this.allCars.length; i++){
            let thisCar = this.allCars[i];
            let newSpeed = Math.ceil(Math.random()*10);
            thisCar.addSpeed(newSpeed);
        }

        //Sort the positions of all the cars based on the distance
        //Except for the first lap, which is based on the speed since they start at the same point
        let lapFinish = (lapNum+1) * this.lapLength;
        for(let i=0; i<this.allCars.length; i++){
            let thisCar = this.allCars[i];
            let distanceToLapFinish = lapFinish - thisCar.distance;
            let timeToLapFinish = distanceToLapFinish/thisCar.speed;
            thisCar.lapTime = timeToLapFinish;
        }
        this.allCars.sort((a,b) => a.lapTime - b.lapTime);

        let currLapTime = this.allCars[0].lapTime;
        for(let i=0; i<this.allCars.length; i++){
            let thisCar = this.allCars[i];
            thisCar.distance = thisCar.distance + (thisCar.speed * currLapTime);
            console.log('LAP TIME : ' + currLapTime.toFixed(2));
            this.totalTime = this.totalTime + currLapTime;
        }
    }
    printPositions(){
        //store distance of the first place
        let firstPlaceDistance = 0;
        for(let i=0; i<this.allCars.length; i++){
            let thisCar = this.allCars[i];
            let output = `${i+1} ${thisCar.make} ${thisCar.model}`;
            if(firstPlaceDistance === 0) {
                firstPlaceDistance = thisCar.distance;
            } else{
                let distanceBetweenCar = (firstPlaceDistance - thisCar.distance).toFixed(2);
                output += `( - ${distanceBetweenCar})`;
            }
            console.log(output);
        }
    }
}
let carArr = [];
let car1 = new Car("Kia", "Rio", 1.5, 5);
carArr.push(car1);
carArr.push(new Car("Lamborghini", "Diablo", 5.7, 2));
carArr.push(new Car("Tesla", "Model X", 3.5, 4));
carArr.push(new Car("Fiat", "Punto", 2.4, 5));
carArr.push(new Car("Porsche", "911", 4.0, 2));

let race = new Race(carArr);
race.startRace();
