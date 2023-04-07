import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';

import { Posts } from 'src/app/interface/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  constructor(private postService: PostsService) { }

  fakePostsData: Posts[] = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    // console.log(`Sheesh ${this.postService.fakePostsDataUrl}`);
    this.postService.getData().subscribe(

      (response: Posts[]) => {
        this.fakePostsData = response;
      },
      (error: any) => {
        alert(error.message);
      },
      () => {
        console.log('Sheesh');
        console.log(this.fakePostsData);
      }

    );
  }

}
