import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Posts } from 'src/app/interface/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() Posts: Posts = {} as Posts;

  constructor(private router: Router) { }

  updatePostPage(): void {
    this.router.navigate(['/Update/Post']);
  }

}
