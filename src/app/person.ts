export class Person {
species: string;
  constructor(public person, private birthyear) { };



  //.  Prototype  //
  // Person.prototype.calculateAge = function () {
  //   return 2037 - this.birthyear;
  // };




  get calculateAge() {
    return 2037 - this.birthyear;
  };




}


// This goes to the Person prototype
// If i check it hasownproperty it doesnt exist

Person.prototype.species ="Homo Sapiens";
