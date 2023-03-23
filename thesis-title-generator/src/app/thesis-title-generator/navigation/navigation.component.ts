import { Component, OnInit } from '@angular/core';

import { ThesisTitleGeneratorService } from '../thesis-title-generator.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  // isHome: boolean = false;

  constructor(private thesisTitleGeneratorService: ThesisTitleGeneratorService) {
    // this.isHome = thesisTitleGeneratorService.isInHome;
  }

  // homeClick(): void {
  //   this.thesisTitleGeneratorService.isInHomeFunction(true);
  //   this.isHome = this.thesisTitleGeneratorService.isInHome;
  // }

}
