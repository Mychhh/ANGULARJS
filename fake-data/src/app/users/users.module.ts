import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserContainerComponent } from '../container/user-container.component';
import { UsersComponent } from './users-component/users.component'
import { NavigationComponent } from '../semantics/navigation.component';
import { UserComponent } from './user-component/user.component';

@NgModule({
  declarations: [
    UserContainerComponent,
    NavigationComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UserContainerComponent,
  ],

})
export class UsersModule { }
