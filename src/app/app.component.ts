import { Component, VERSION } from '@angular/core';
import { Car, EV } from './car';
import { Person } from './person';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    // let man = new Person('manoj', 1993);
    // console.log(man.calculateAge);
    // console.log(man.species);
    // console.log(man);

    // let maq = [1,1,1,2,2,3];
    // console.log(unique(maq))

    // let bmw =  new Car('bmw', 120);
    // let mercedes = new Car('mercedes', 95);

    // console.log(bmw);
    // console.log(bmw.speedUS);
    // console.log(bmw.accelerate());
    // console.log(bmw.speedUS);
    // bmw.speed = 50;
    // console.log(bmw);

    let tesla = new EV('Tesla', 120, 23);
    console.log(
      'Tesla going at ' +
        tesla.speed +
        'km/h with a charge of ' +
        tesla._charge +
        '%'
    );

    console.log('chaining methods start');

    tesla.accelerate().chargeBattery = 90;

    console.log('chaining methods ends');

    console.log(
      'Tesla going at ' +
        tesla.speed +
        'km/h with a charge of ' +
        tesla._charge +
        '%'
    );

    console.log(tesla.accelerate());
    console.log(tesla.accelerate());

    console.log(
      'Tesla going at ' +
        tesla.speed +
        'km/h with a charge of ' +
        tesla._charge +
        '%'
    );

    // tesla.chargeBattery();

    console.log(tesla);

    console.log();

    console.log();
  }
}

// function unique(arr) {
//   return [...new Set(arr)];
// }

// const Person = function (person, birthyear) {
//   this.person = person;
//   this.birthyear = birthyear;
// };

// Person.prototype.calculateAge = function () {
//   return 2037 - this.birthyear;
// };
