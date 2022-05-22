import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-bind-apply',
  templateUrl: './call-bind-apply.component.html',
  styleUrls: ['./call-bind-apply.component.css'],
})
export class CallBindApplyComponent implements OnInit {
  poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
      return Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}\n(write option number)`
        )
      );
      // console.log(test);
    },
  };

  constructor() {}

  ngOnInit() {
    // console.log(this.poll.registerNewAnswer());
    if (this.poll.registerNewAnswer() <= 3) {
      this.poll.answers[this.poll.registerNewAnswer()]++;
    }
    console.log(this.poll);

    // prompt()
  }

  // registerNewAnswer(){

  // }
}
