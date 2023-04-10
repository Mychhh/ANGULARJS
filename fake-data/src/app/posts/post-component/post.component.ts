import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private postService: PostsService) { }

  updatePostPage(): void {
    this.router.navigate(['/Update/Post']);
    this.postService.message = "Sheesh"
    this.postService.post = this.Posts
  }

}