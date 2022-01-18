class Vehicle {
    constructor (make, model, year ){
        this.make = make; 
        this.model = model;
        this.year = year; 
    }
    honk (){
        return "Beep";
    }
    toString() {
        return `The vehicle is ${this.make} ${this.make} from ${this.year}.`;

    }
}

class Car extends Vehicle {
    constructor (make, model, year) {
        super (make, model, year);
        this.numWheels = 4;
    }
}



class Garage {
    constructor (capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only behihles are allowed";
        }
        if (this.vehocles.length >+ this.capacity){
            return "FULL";
        }
        this.vehicles.push(newVehicle);
        return "NEW Vehicle";
        
    }
}