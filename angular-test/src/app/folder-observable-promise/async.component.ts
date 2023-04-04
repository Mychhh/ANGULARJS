import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit, OnDestroy {

  observableSubscription: Subscription | undefined;

  // promise
  promise = new Promise(resolve => {
    // console.log('Promise is running ... Sheesh')
    setTimeout(() => {
      resolve('Promise works')
    }, 1000)
  })

  // observable
  observable = new Observable(result => {
    // console.log('Observable is running ...')

    let counter = 0;

    setInterval(() => {
      counter += 1;
      result.next(counter);
    }, 2000);

    setTimeout(() => {
      result.next('Observable works')
      result.next('Observable works 1')
      result.next('Observable works 2')
      result.next('Observable works 3')
    }, 1000)
  })

  // onInit
  ngOnInit(): void {
    this.promise.then(result => {
      console.log(result);
    });

    this.observableSubscription = this.observable
      // .pipe(
      //   filter(data => data === "Observable works")
      // )
      .subscribe(result => {
        console.log(result);
      });
  }

  ngOnDestroy(): void {
    this.observableSubscription!.unsubscribe();
  }

}
