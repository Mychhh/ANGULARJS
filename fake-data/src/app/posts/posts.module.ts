import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts-component/posts.component';
import { PostComponent } from './post-component/post.component'

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostsComponent,
  ]
})
export class PostsModule { }
