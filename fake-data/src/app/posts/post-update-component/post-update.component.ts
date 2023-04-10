import { Component, OnInit } from '@angular/core';

import { Posts } from 'src/app/interface/posts';

import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  // needs to change 
  updatePost: Posts = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  }

  constructor(private router: Router, private postService: PostsService) { }

  ngOnInit(): void {
    this.updatePost = this.postService.post!
    console.log(this.postService.message)
    console.log(this.postService.post)

    if (this.updatePost === undefined) {
      this.redirectToPost();
    }
  }

  validateUpdateData() {
    if ((this.updatePost.title === '') || (this.updatePost.body === '')) {
      alert('Fields cannot be empty...');
    } else {
      this.updateData();
    }
  }

  updateData() {
    this.postService.updateData(this.updatePost, this.updatePost.id)

    alert(
      `
    User# ${this.updatePost.userId} updated their post with a new 
    title of: ${this.updatePost.title}
    content of: ${this.updatePost.body}`
    );

    this.redirectToPost();
  }

  redirectToPost(): void {
    this.router.navigate(['Posts'])
  }

}
