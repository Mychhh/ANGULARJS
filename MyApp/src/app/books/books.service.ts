import { Injectable } from '@angular/core';

@Injectable()

export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        author: 'Clean Code',
        name: 'Robert C. Martin',
        amount: 404,
      },
      {
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg',
        author: 'The Pragmatic Programmer',
        name: 'David Thomas',
        amount: 404,
      },
      {
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51lJbiMhVRL._SX404_BO1,204,203,200_.jpg',
        author: 'Introduction to Programming',
        name: ' Donald Knuth',
        amount: 404,
      },
      {
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41RlsiG0lHL._SX444_BO1,204,203,200_.jpg',
        author: 'The Art of Computer Programming',
        name: 'Nick Samoylov',
        amount: 404,
      },
    ]
  }
}
