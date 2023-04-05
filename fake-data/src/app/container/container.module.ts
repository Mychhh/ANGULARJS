import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';

import { UserContainerComponent } from './user-container.component'

// import { RouterModule, Routes } from '@angular/router';

// import { UsersComponent } from '../users/users-component/users.component'
// import { PostsComponent } from '../posts/posts-component/posts.component'

// const appRoute: Routes = [
//   { path: '', component: UsersComponent, pathMatch: 'full' },
//   { path: 'Users', component: UsersComponent, },
//   { path: 'Posts', component: PostsComponent, },
// ]

@NgModule({
  declarations: [
    UserContainerComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    PostsModule,
    // RouterModule.forRoot(appRoute),
  ],
  exports: [
    UserContainerComponent
  ]
})
export class ContainerModule { }
