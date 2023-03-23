import { Component, OnInit } from '@angular/core';

//service 
import { ThesisTitleGeneratorService } from '../thesis-title-generator.service';
import { ClipboardService } from 'ngx-clipboard';

// interface
import { ThesisTitle } from 'src/app/interface/ThesisTitle';

@Component({
  selector: 'app-generate-title',
  templateUrl: './generate-title.component.html',
  styleUrls: ['./generate-title.component.css']
})
export class GenerateTitleComponent implements OnInit {

  copyText: string = 'Copy'
  courseAcronym: string = '';
  courseToGenerateTitle: string = '';
  generatedThesisIdea: ThesisTitle = <ThesisTitle>{};

  constructor(private thesisTitleGeneratorService: ThesisTitleGeneratorService, private clipboardService: ClipboardService) {

  }

  ngOnInit(): void {
    this.courseAcronym = this.thesisTitleGeneratorService.chosenCourse;

    // functions
    this.whatCourseToGenerateTitle(this.thesisTitleGeneratorService.chosenCourse);
  }

  // functions
  whatCourseToGenerateTitle(courseToGenerateTitle: string): void {

    this.copyText = 'Copy';

    switch (courseToGenerateTitle) {
      case ('IT'):
        this.courseToGenerateTitle = 'for BS Information and Technology';
        this.generatedThesisIdea = this.thesisTitleGeneratorService.getThesisTitleFromIT();
        break;
    }
  }

  copy(thesisTitle: ThesisTitle): void {
    this.clipboardService.copy(
      `
    Title: ${thesisTitle.thesis_title}
    Description: ${thesisTitle.thesis_title_description}
    `)

    this.copyText = 'Copied';
  }


}
