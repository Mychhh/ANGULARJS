import { Component, Input } from '@angular/core';

import { Posts } from 'src/app/interface/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() Posts: Posts = {} as Posts;
}
