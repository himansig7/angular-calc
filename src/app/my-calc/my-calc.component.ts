import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-calc',
  templateUrl: './my-calc.component.html',
  styleUrls: ['./my-calc.component.css'],
})
export class MyCalcComponent implements OnInit {
  constructor() {}

  currentNumber: number = 0;
  lastNumber: number = 0;

  nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  ops = ['+', '-', 'x', '/', '='];

  op;
  ngOnInit() {}
  numberPress(n) {
    this.currentNumber = this.currentNumber * 10 + n;
  }
  operationPress(o) {
    this.op = o;
    this.lastNumber = this.currentNumber;
    this.currentNumber = 0;
    this.calc();
  }

  equalPress() {
    this.calc();
  }

  calc() {
    let ans = 0;
    //switch
    if (this.op == '+') {
      ans = this.lastNumber + this.currentNumber;
    } else if (this.op == '-') {
      ans = this.lastNumber - this.currentNumber;
    } else if (this.op == 'x') {
      ans = this.lastNumber * this.currentNumber;
    } else if (this.op == '/') {
      ans = this.lastNumber / this.currentNumber;
    }

    this.currentNumber = ans;
    this.lastNumber = 0;
  }
}
