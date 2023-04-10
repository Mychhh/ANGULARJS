import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Posts } from '../interface/posts';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  post: Posts | undefined;
  message: string = '';

  // headers
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    })
  };

  // url
  fakePostsDataUrl: string = `https://jsonplaceholder.typicode.com/posts`;

  // constructor
  constructor(private http: HttpClient) { }

  // callMe(): void {
  // }

  // reads the data
  readData(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.fakePostsDataUrl);
  }

  // creates the data
  createData(post: Post): Observable<Post> {
    return this.http.post<Post>(this.fakePostsDataUrl, post, this.httpHeader);
  }

  // update the data
  updateData(post: Posts, postId: number): Observable<Posts> {
    return this.http.post<Posts>(`${this.fakePostsDataUrl}/${postId}`, post, this.httpHeader);
  }

  // delete the data
  deleteTheData() {

  }

}
