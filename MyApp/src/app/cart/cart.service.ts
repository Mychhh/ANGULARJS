import { Injectable } from '@angular/core';

import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }

  add(book: Book) {
    this.cart.push(book);
  }

  remove(book: Book) {
    // filter array where the value is not equals to book parameter 
    this.cart = this.cart.filter((b) => b != book)
  }

  get() {
    return this.cart;
  }
}
