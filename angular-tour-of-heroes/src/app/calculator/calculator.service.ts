import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  value: number = 0;

  constructor() { }

  // addition
  addition(number1: number, number2: number): number {
    this.value = number1 + number2;
    return this.value;
  }

  // subtraction
  subtraction(number1: number, number2: number): number {
    this.value = number1 - number2;
    return this.value;
  }

  // division
  division(number1: number, number2: number): number {
    this.value = number1 / number2;
    return this.value;
  }

  // multiplication
  multiplication(number1: number, number2: number): number {
    this.value = number1 * number2;
    return this.value;
  }

}
