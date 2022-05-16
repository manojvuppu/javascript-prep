export abstract class Car {
  constructor(public make: string, public speed: number) {}

  accelerate() {
    return this.speed + 10;
  }
  brake() {
    return this.speed - 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    console.log(speed);
    this.speed = speed * 1.6;
  }
}

export class EV extends Car {
  constructor(
    public make: string,
    public speed: number,
    public charge: number
  ) {
    super(make, speed);
  }

  set chargeBattery(chargeTo: number) {
    this.charge = chargeTo;
  }

  accelerate() {
     this.speed += 20 ;
     this.charge = this.charge -1;
     return this.speed && this.charge
  }
}

