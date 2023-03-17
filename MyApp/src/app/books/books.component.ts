import { Component } from '@angular/core';

import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  books: Book[] = []

  constructor(private booksService: BooksService) {
    this.books = booksService.getBooks();
  }

  // cart: Book[] = [];

  isShowing: boolean = true;

  // addToCart(book: Book) {
  //   console.log(book)
  // }

  // isDisable: boolean = false;
  // myName: string = '';

  // event binding
  // handleClick = () => {
  //   this.isDisable = !this.isDisable;
  // }

}
