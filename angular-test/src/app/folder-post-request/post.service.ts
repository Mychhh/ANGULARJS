import { Injectable } from '@angular/core';

import { PostRequest } from '../interface/post_request';
import { GetRequest } from '../interface/get_request';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
    })
  };

  constructor(private http: HttpClient) { }

  /** GET: get posts from the database */
  getPost() {
    return this.http.get(this.postUrl);
  }

  /** POST: add a new post to the database */
  addPost(post: PostRequest): Observable<PostRequest> {
    return this.http.post<PostRequest>(this.postUrl, post);
  }

  /** DELETE: delete the post from the server */
  deletePost(id: number) {
    const url = `${this.postUrl}/${id}`; // DELETE api/fakedata/1
    return this.http.delete(url)
  }

  /** PUT: update the post on the server. Returns the updated post upon success. */
  updatePost(post: GetRequest, id: number): Observable<GetRequest> {
    const url = `${this.postUrl}/${id}`; // PUT api/fakedata/1
    return this.http.put<GetRequest>(url, post, this.httpOptions)
  }

}
