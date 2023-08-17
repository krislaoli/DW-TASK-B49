class Car {
  #make = "";
  #model = "";

  constructor(make, model) {
    this.#make = make;
    this.#make = model;
  }

  get make() {
    return this.#make;
  }
}
