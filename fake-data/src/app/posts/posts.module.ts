import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsComponent } from './posts-component/posts.component';
import { PostComponent } from './post-component/post.component';
import { PostCreateComponent } from './post-create-component/post-create.component'

import { RouterModule, Routes } from '@angular/router';
import { PostUpdateComponent } from './post-update-component/post-update.component';

const appRoute: Routes = [
  { path: 'Create-Post', component: PostCreateComponent },
  { path: 'Posts', component: PostsComponent },
]

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostCreateComponent,
    PostUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
  ],
  exports: [
    PostsComponent,
  ]
})
export class PostsModule { }
