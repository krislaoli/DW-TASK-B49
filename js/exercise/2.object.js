class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `The car is a ${this.make} %{this.model}`;
  }
}

// object
const myCar1 = new Car("Tesla", "Model Y");
const myCar2 = new Car("Tesla", "Model Y");
const myCar3 = new Car("Tesla", "Model Y");

console.log(myCar1.getInfo);
