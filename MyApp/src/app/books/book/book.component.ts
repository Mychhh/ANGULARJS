import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// service
import { CartService } from 'src/app/cart/cart.service';
// interface
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
  // @Output() bookEmitter = new EventEmitter<Book>();
  isInCart: boolean = false;

  constructor(private sanitizer: DomSanitizer, private cartService: CartService) { }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  // like useEffect
  ngOnInit(): void {
  }

}
