import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  // parent to this child
  @Input() book: Book = {} as Book;
  // this child to parent
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  addToCart() {
    this.bookEmitter.emit(this.book);
  }

  // like useEffect
  ngOnInit(): void {
  }

}
