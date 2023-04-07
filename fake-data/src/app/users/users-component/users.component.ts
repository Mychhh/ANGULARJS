import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import { Users } from 'src/app/interface/users';
import { Subscription, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, OnDestroy {

  observableSubscription: Subscription | undefined;
  fakeUsersData: Users[] = [];

  isDataFetched: boolean = false;
  isDataError: boolean = false;

  headers: any;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.observableSubscription = this.userService
      .getData()
      .subscribe(
        (response: Users[]) => {
          this.fakeUsersData = response;
          this.isDataFetched = true;
        },
        (error: any) => {
          this.isDataError = true;
        },
        () => {
          // console.log('Sheesh Done');
          // alert('Message Fetched Succesfully');
        }
      );
  }

  ngOnDestroy(): void {
    this.observableSubscription!.unsubscribe();
  }



}
