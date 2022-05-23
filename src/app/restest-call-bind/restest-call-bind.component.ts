import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restest-call-bind',
  templateUrl: './restest-call-bind.component.html',
  styleUrls: ['./restest-call-bind.component.css'],
})
export class RestestCallBindComponent implements OnInit {
  poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
      const answer = Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}(Write option number)`
        )
      );
      typeof answer === 'number' &&
        answer < this.options.length &&
        this.answers[answer]++;
      this.displayResults('string');
    },
    displayResults(type: string | [] = 'array') {
      debugger;
      if (type === 'array') {
        console.log(`${this.answers}`);
      } else if (type === 'string') {
        console.log(`poll results are ${this.answers.join(', ')}`);
      }
    },
  };

  constructor() {}

  ngOnInit() {
    document
      .querySelector('.answer')
      .addEventListener('click', this.poll.registerNewAnswer.bind(this.poll));

    // this.poll.registerNewAnswer();
    console.log(this.poll);

    this.poll.displayResults.call({ answers: [1, 2, 3] }, 'string');
  }
}
