import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';

import { PostRequest } from '../interface/post_request';
import { GetRequest } from '../interface/get_request';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  dummyPost: GetRequest = {} as GetRequest

  postRequest: PostRequest = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

  getRequest: GetRequest[] = [];

  updatePostTemplate: GetRequest = {
    id: 1,
    title: 'foo foo',
    body: 'bar bar',
    userId: 1,
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.addNewPost();

    // deletes a post
    // this.postService
    //   .deletePost(1)
    //   .subscribe(
    //     (response) => {
    //       console.log(response)
    //     }
    //   );
  }

  addNewPost() {
    this.postService
      .addPost(this.postRequest)
      .subscribe(post => {

        this.dummyPost.body = post.body;
        this.dummyPost.title = post.title;
        this.dummyPost.userId = post.userId;
        this.dummyPost.id = 101;

        this.getRequest?.push(this.dummyPost)
        console.log(post)

        this.getPostList()

        setTimeout(() => {
          console.log(this.getRequest)
        }, 1000);
      });
  }

  getPostList() {
    this.postService.getPost().subscribe(
      (response: any) => {
        // this.getRequest = { ...response };
        console.log(response);
        this.getRequest = response;
      }
    )
  }

  updatePost() {
    this.postService.updatePost(this.updatePostTemplate, this.updatePostTemplate.id)
      .subscribe(
        (response) => {
          console.log(response)
        }
      )
  }


}
