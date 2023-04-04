import { Component, OnInit } from '@angular/core';
import { Observable, from, observable, of } from 'rxjs';

import { ObservableService } from '../folder-observable/observable.service'

import { DataConfig } from '../interface/DataConfig';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})

export class ObservableComponent implements OnInit {

  Data: DataConfig[] = [];

  constructor(private observableService: ObservableService) { }

  ngOnInit(): void {
    this.showConfigData();
  }

  showConfigData(): void {
    this.observableService.getDataConfig()
      .subscribe(
        (response) => {
          this.Data = { ...response.body! };
          // console.log(this.Data);
        },
        (error) => {
          alert(error.message);
        },
        // () => {
        //   alert('Sheesh data is fetched')
        // }
      );
  }

}
