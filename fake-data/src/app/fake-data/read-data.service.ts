import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

import { FakeDataUser } from '../interface/fake-data';

@Injectable({
  providedIn: 'root'
})

export class ReadDataService {

  fakeDataURI: string = 'https://reqres.in/api/users?page=2';
  fakeDataUsers: Array<FakeDataUser[]> = [];
  fakeDataUser: FakeDataUser[] = [];

  constructor(private http: HttpClient) { }

  getFakeData() {
    return this.http.get<FakeDataUser>(this.fakeDataURI);
  }

  showFakeData() {
    this.getFakeData()
      .subscribe((fakeData: FakeDataUser) => {
        console.log(fakeData);
      })
  }

}
