import { Component, OnInit } from '@angular/core';

//service 
import { ThesisTitleGeneratorService } from '../thesis-title-generator.service';

// interface
import { ThesisTitle } from 'src/app/interface/ThesisTitle';

@Component({
  selector: 'app-generate-title',
  templateUrl: './generate-title.component.html',
  styleUrls: ['./generate-title.component.css']
})
export class GenerateTitleComponent implements OnInit {

  courseToGenerateTitle: string = '';
  generatedThesisIdea: ThesisTitle = <ThesisTitle>{};

  constructor(private thesisTitleGeneratorService: ThesisTitleGeneratorService) {

  }

  ngOnInit(): void {
    this.whatCourseToGenerateTitle(this.thesisTitleGeneratorService.chosenCourse);
  }

  whatCourseToGenerateTitle(courseToGenerateTitle: string): void {
    switch (courseToGenerateTitle) {
      case ('IT'):
        this.courseToGenerateTitle = 'for BS Information and Technology';
        this.generatedThesisIdea = this.thesisTitleGeneratorService.getThesisTitleFromIT();
        break;
    }
  }

}
