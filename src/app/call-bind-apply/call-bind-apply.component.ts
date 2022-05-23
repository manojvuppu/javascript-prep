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
      const answer: Number = Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}\n(write option number)`
        )
      );
      console.log(answer);
      typeof answer == 'number' &&
        answer < this.answers.length &&
        this.answers[answer]++;
      // return answer;
      this.displayResults('array');
    },
    displayResults(type = 'array') {
      console.log(type);
      type === 'string'
        ? console.log(this.answers)
        : console.log(`Poll results are ${this.answers.join(',')}`);
    },
  };

  constructor() {}

  ngOnInit() {
    // document
    //   .querySelector('.register')
    //   .addEventListener('click', this.poll.registerNewAnswer.bind(this.poll));

    this.poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
    console.log(this.poll);
  }

  registerNewAnswer() {
    this.poll.registerNewAnswer();

    // this.displayResults(this.poll.answers as [string]);
    // console.log(this.poll);
  }

  // displayResults(type: string | [string]) {
  //   typeof type == 'string'
  //     ? console.log(`Poll results are `)
  //     : console.log(`Poll results are ${type.join(',')}`);
  // }
}
