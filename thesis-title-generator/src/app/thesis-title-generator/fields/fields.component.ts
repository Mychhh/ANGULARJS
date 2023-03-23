import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ThesisTitleGeneratorService } from '../thesis-title-generator.service'

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent {

  isHome: boolean = false;

  constructor(private router: Router, private thesisTitleGeneratorService: ThesisTitleGeneratorService) {
    // this.isHome = thesisTitleGeneratorService.isInHome;
    // console.log(this.isHome)
  };

  clickToGenerate(): void {
    // this.thesisTitleGeneratorService.isInHome = false;
    // console.log(this.isHome)
    // you can pass some values on it
    this.router.navigate(['/generate-title']);
  }
}
