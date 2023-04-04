import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users-component/users.component'
import { NavigationComponent } from '../semantics/navigation.component';
import { UserComponent } from './user-component/user.component';

@NgModule({
  declarations: [
    NavigationComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavigationComponent,
    UsersComponent,
  ]

})
export class UsersModule { }
