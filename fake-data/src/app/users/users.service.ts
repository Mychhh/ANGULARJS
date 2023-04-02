import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  fakeUsersDataUrl = 'https://jsonplaceholder.typicode.com/users';

  headers: any;
  config: Users[] = [];

  constructor(private http: HttpClient) { }

  getFakeUsersData() {
    return this.http.get<[Users]>(this.fakeUsersDataUrl);
  }

  // much more efficient because you can see the headers and dont have to iterate body to store in a variable
  showFakeUsersData() {
    this.http.get<[Users]>(this.fakeUsersDataUrl, { observe: 'response' })
      .subscribe(resp => {
        const keys = resp.headers.keys();

        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`
        );

        // access the body directly, which is typed as `Config`.
        this.config = { ...resp.body! };

        console.log(this.config);
        console.log(this.headers);
      });
  }

}
