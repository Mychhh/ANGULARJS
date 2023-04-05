import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  fakeUsersDataUrl = 'https://jsonplaceholder.typicode.com/users';

  headers: any;

  constructor(private http: HttpClient) { }

  getData(): Observable<Users[]> {
    return this.http.get<Users[]>(this.fakeUsersDataUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.error.error
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
