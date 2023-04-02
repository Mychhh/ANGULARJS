import { ReadDataService } from './read-data.service';

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-data',
  templateUrl: './fake-data.component.html',
  styleUrls: ['./fake-data.component.css']
})
export class FakeDataComponent implements OnInit {

  constructor(private readDataService: ReadDataService) { }

  ngOnInit(): void {
    this.readDataService.showFakeData();
  }

}
