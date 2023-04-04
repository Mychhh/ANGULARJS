import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {

  // Promise
  greeting: Promise<string> | null = null;
  arrived: boolean = false;

  private resolve: Function | null = null;

  //Observable
  time = new Observable<string>((observer: Observer<string>) => {

    setInterval(() => {
      observer.next(new Date().toString()),
        1000
    })

  });

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }

}
