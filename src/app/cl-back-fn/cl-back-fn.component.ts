import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cl-back-fn',
  templateUrl: './cl-back-fn.component.html',
  styleUrls: ['./cl-back-fn.component.css'],
})
export class ClBackFnComponent implements OnInit {
  constructor() {
    this.transform("hello am manoj",this.upperFirstWord)
  }

  ngOnInit() {}

  oneWord(str:string){
    return str.replace(/ /g,'').toLowerCase();
  }

  upperFirstWord(str:string){
    const[first,...others]= str.split(" ");
    return [first.toUpperCase(), ...others].join(' ');
  }

  transform(str:string,fn:Function){
    console.log(`Transformed by: ${fn.name}`)
  }
}
