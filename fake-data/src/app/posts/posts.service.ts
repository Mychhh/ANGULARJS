import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Posts } from '../interface/posts';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    })
  };

  fakePostsDataUrl: string = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) { }

  // reads the data
  readData(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.fakePostsDataUrl);
  }

  // creates the data
  createData(post: Post): Observable<Post> {
    return this.http.post<Post>(this.fakePostsDataUrl, post, this.httpHeader)
  }

}
