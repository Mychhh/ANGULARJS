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
  headers: any;
  isDataFetched: boolean = false;

  constructor(private userService: UsersService) {
    this.showFakeData();
  }

  ngOnInit(): void {
  }

  showFakeData(): void {
    this.userService.showFakeUsersData()
      .subscribe(
        (response) => {
          // getting the headers
          const keys = response.headers.keys();

          // mapping and storing the value
          this.headers = keys.map((key: any) =>
            `${key}: ${response.headers.get(key)}`
          );

          // access the body directly, which is typed as `Config`.
          this.fakeUsersData = { ...response.body! };
          this.isDataFetched = true;

          // console.log(...response.body!);
          // console.log(this.fakeUsersData);
          // console.log(this.headers);
        });

    // setTimeout(() => {
    //   console.log(this.fakeUsersData)
    //   console.log("Sheesh " + this.fakeUsersData);
    // },
    //   5000);
  }

}
