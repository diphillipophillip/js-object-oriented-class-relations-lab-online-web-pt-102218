let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
   trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    });
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.PassengerId === this.id 
    })
  }
}

class Trip {
  constructor() {
    this.id = ++tripId
    this.driverId = driverId
    this.passengerId = passengerId
    store.trips.push(this)
  }
    driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}


