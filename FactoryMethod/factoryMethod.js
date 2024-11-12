// Vehicle Interface
class Vehicle {
    constructor(fuelType, maxSpeed) {
        this.fuelType = fuelType;
        this.maxSpeed = maxSpeed;
    }
    
    start() {
        throw new Error("Method 'start()' must be implemented.");
    }
    
    drive() {
        throw new Error("Method 'drive()' must be implemented.");
    }
    
    refuel() {
        throw new Error("Method 'refuel()' must be implemented.");
    }
}

// Car Class
class Car extends Vehicle {
    constructor() {
        super("Petrol", 180);
    }

    start() {
        console.log("Starting a car...");
    }

    drive() {
        console.log("Driving the car at max speed of", this.maxSpeed, "km/h.");
    }

    refuel() {
        console.log("Refueling the car with", this.fuelType + ".");
    }
}

// Bike Class
class Bike extends Vehicle {
    constructor() {
        super("Petrol", 120);
    }

    start() {
        console.log("Starting a bike...");
    }

    drive() {
        console.log("Riding the bike at max speed of", this.maxSpeed, "km/h.");
    }

    refuel() {
        console.log("Refueling the bike with", this.fuelType + ".");
    }
}

// Truck Class
class Truck extends Vehicle {
    constructor() {
        super("Diesel", 100);
    }

    start() {
        console.log("Starting a truck...");
    }

    drive() {
        console.log("Driving the truck with a heavy load at max speed of", this.maxSpeed, "km/h.");
    }

    refuel() {
        console.log("Refueling the truck with", this.fuelType + ".");
    }
}

// Transport Class (Abstract)
class Transport {
    createVehicle() {
        throw new Error("Method 'createVehicle()' must be implemented.");
    }

    startTransport() {
        const vehicle = this.createVehicle();
        vehicle.start();
        vehicle.drive();
        vehicle.refuel();
    }
}

// CarTransport Class
class CarTransport extends Transport {
    createVehicle() {
        return new Car();
    }
}

// BikeTransport Class
class BikeTransport extends Transport {
    createVehicle() {
        return new Bike();
    }
}

// TruckTransport Class
class TruckTransport extends Transport {
    createVehicle() {
        return new Truck();
    }
}

// Client code
const carTransport = new CarTransport();
carTransport.startTransport();
// Output:
// Starting a car...
// Driving the car at max speed of 180 km/h.
// Refueling the car with Petrol.

const bikeTransport = new BikeTransport();
bikeTransport.startTransport();
// Output:
// Starting a bike...
// Riding the bike at max speed of 120 km/h.
// Refueling the bike with Petrol.

const truckTransport = new TruckTransport();
truckTransport.startTransport();
// Output:
// Starting a truck...
// Driving the truck with a heavy load at max speed of 100 km/h.
// Refueling the truck with Diesel.
