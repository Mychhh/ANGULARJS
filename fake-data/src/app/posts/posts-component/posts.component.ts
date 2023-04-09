import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';

import { Posts } from 'src/app/interface/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  isDataFetched: boolean = false;
  isDataError: boolean = false;

  fakePostsData: Posts[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    // console.log(`Sheesh ${this.postsService.fakePostsDataUrl}`);
    this.postsService.readData().subscribe(

      (response: Posts[]) => {
        this.fakePostsData = response;
        this.isDataFetched = true;
      },
      (error: any) => {
        // alert(error.message);
        this.isDataError = true;
      },
      () => {
        // console.log('Sheesh');
        // console.log(this.fakePostsData);
      }

    );
  }

}
