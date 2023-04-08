import { Injectable } from '@angular/core';

import { PostRequest } from '../interface/post_request';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  /** POST: add a new post to the database */
  getPost() {
    return this.http.get(this.postUrl);
  }

  /** POST: add a new post to the database */
  addPost(post: PostRequest): Observable<PostRequest> {
    return this.http.post<PostRequest>(this.postUrl, post);
  }

}
