import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator/calculator.service'


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  constructor(private calculator: CalculatorService) {

  }

  ngOnInit(): void {
    this.division();
  }

  addition() {
    this.result = this.calculator.addition(this.number1, this.number2);
  }

  subtraction() {
    this.result = this.calculator.subtraction(this.number1, this.number2);
  }

  division() {
    this.result = this.calculator.division(this.number1, this.number2);
  }

  multiplication() {
    this.result = this.calculator.multiplication(this.number1, this.number2);
  }

}
