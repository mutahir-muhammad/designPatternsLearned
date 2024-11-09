JavaScript
// Subsystem Classes
class Lights {
    turnOn() {
        console.log('Turning on lights');
    }

    turnOff() {
        console.log('Turning off lights');
    }
}

class Thermostat {
    setTemperature(temperature) {
        console.log(`Setting temperature to ${temperature}`);
    }
}

// Facade Class
class HomeAutomationFacade {
    #lights;
    #thermostat;

    constructor() {
        this.#lights = new Lights();
        this.#thermostat = new Thermostat();
    }

    wakeUp() {
        this.#lights.turnOn();
        this.#thermostat.setTemperature(22);
    }

    sleep() {
        this.#lights.turnOff();
        this.#thermostat.setTemperature(18);
    }
}

// Client Code
const homeAutomation = new HomeAutomationFacade();
homeAutomation.wakeUp();
homeAutomation.sleep();