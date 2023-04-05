import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users-component/users.component'
import { NavigationComponent } from '../semantics/navigation.component';
import { UserComponent } from './user-component/user.component';
import { PostsComponent } from '../posts/posts-component/posts.component'

import { RouterModule, Routes } from '@angular/router';


const appRoute: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'Users', component: UsersComponent, },
  { path: 'Posts', component: PostsComponent, },
]

@NgModule({
  declarations: [
    NavigationComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute),
  ],
  exports: [
    NavigationComponent,
    UsersComponent,
  ]

})
export class UsersModule { }
