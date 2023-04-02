import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserContainerComponent } from '../container/user-container.component';
import { UsersComponent } from './users-component/users.component'

@NgModule({
  declarations: [
    UserContainerComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UserContainerComponent,
  ],

})
export class UsersModule { }
