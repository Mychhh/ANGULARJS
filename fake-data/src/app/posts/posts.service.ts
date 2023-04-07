import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Posts } from '../interface/posts';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  fakePostsDataUrl: string = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) { }

  getData(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.fakePostsDataUrl);
  }

}
