import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import { Users } from 'src/app/interface/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  fakeUsersData: Users[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getFakeUsersData()
      .subscribe((data: [Users]) => {

        for (let i of data) {
          // console.log("Sheesh " + i.name);
          this.fakeUsersData.push(i);
        }

      });
    console.log(this.fakeUsersData);

    // much more effiecient to fetch data
    // this.userService.showFakeUsersData();

  }



}
