import { Component, Input } from '@angular/core';
import { Users } from 'src/app/interface/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  @Input() fakeUserData: Users = {} as Users;

}
