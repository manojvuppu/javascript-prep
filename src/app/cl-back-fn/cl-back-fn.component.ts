import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cl-back-fn',
  templateUrl: './cl-back-fn.component.html',
  styleUrls: ['./cl-back-fn.component.css'],
})
export class ClBackFnComponent implements OnInit {


  
  
  constructor() {}

  

  ngOnInit() {
    // this.transform('hello am manoj', this.upperFirstWord);
    // this.transform('hello am manoj', this.oneWord);

    console.log(this.greetArr('Hey')('Manoj'));
  }

  oneWord(str: string) {
    return str.replace(/ /g, '').toLowerCase();
  }

  upperFirstWord(str: string) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  }

  transform(str: string, fn: Function) {
    console.log(`Transformed by: ${fn(str)}`);
  }

  // Functions returning functions

  greeting(greeting: string) {
    return (name) => console.log(`${greeting} ${name}`);
  }

  greeted:Function = this.greeting('hey');


  //Arr Function

  greetArr:any = greeting => name => console.log(`${greeting} ${name}`);



}
