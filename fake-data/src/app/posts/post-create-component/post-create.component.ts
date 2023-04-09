import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Post } from 'src/app/interface/post';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  postData: Post = {
    title: "",
    body: "",
    userId: 1,
  }

  constructor(private postsService: PostsService, private router: Router) { }

  validatePost(): void {

    if ((this.postData.title === '') || (this.postData.body === '')) {
      alert('Please complete the input and try again...');
    } else {
      this.postsService.createData(this.postData).subscribe((response) => {
        console.log(response)
      })

      alert(
        `User# ${this.postData.userId} created a new post with a 
      title of: ${this.postData.title}
      content of: ${this.postData.body}`
      );

      this.goToListOfPost();


    }
  }

  createData(): void {
    this.postsService.createData(this.postData).subscribe((response) => {
    })
  }

  goToListOfPost(): void {
    this.router.navigate(['Posts'])
  }

}
