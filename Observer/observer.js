// The Subject Class
class Subject {
    constructor() {
      this.observers = []; // Array to store observers
    }
  
    // Add an observer to the list
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Remove an observer from the list
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // Notify all observers of a change
    notifyObservers(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  // The Observer Class
  class Observer {
    constructor(name) {
      this.name = name; // Identifier for the observer
    }
  
    // Called when the subject notifies observers
    update(data) {
      console.log(`${this.name} received update: ${data}`);
    }
  }
  
  // Example Usage
  const subject = new Subject();
  
  // Create observers
  const observer1 = new Observer('Observer 1');
  const observer2 = new Observer('Observer 2');
  
  // Add observers to the subject
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  // Notify observers with some data
  subject.notifyObservers('New data is available!');
  
  // Remove an observer and notify again
  subject.removeObserver(observer1);
  subject.notifyObservers('Another update!');
  