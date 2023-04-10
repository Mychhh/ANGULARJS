import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Posts } from 'src/app/interface/posts';

import { PostsService } from '../posts.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() Posts: Posts = {} as Posts;

  constructor(private router: Router, private postService: PostsService, private location: Location) { }

  updatePostPage(): void {
    this.router.navigate(['/Update/Post']);
    this.postService.post = this.Posts
  }

  deletePost(): void {
    this.postService.deleteData(this.Posts.id)
    alert(
      `User# ${this.Posts.userId} deleted their post
      title of: ${this.Posts.title}
      content of: ${this.Posts.body}`
    )
    this.reloadPage();
  }

  reloadPage() {
    this.location.go(this.location.path());
    window.location.reload();
  }

}