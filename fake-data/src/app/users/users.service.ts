import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

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

  // much more efficient because you can see the headers and dont have to iterate body to store in a variable
  showFakeUsersData(): Observable<HttpResponse<[Users]>> {
    return this.http.get<[Users]>(this.fakeUsersDataUrl, { observe: 'response' });
  }

}
