import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';

import { UserContainerComponent } from './user-container.component'

@NgModule({
  declarations: [
    UserContainerComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    PostsModule,
  ],
  exports: [
    UserContainerComponent
  ]
})
export class ContainerModule { }
