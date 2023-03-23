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
    this.whatCourse(this.thesisTitleGeneratorService.chosenCourse);
    this.generatedThesisIdea = this.thesisTitleGeneratorService.getThesisTitleFromIT();
  }

  whatCourse(whatCourse: string): void {
    if (whatCourse === 'IT') {
      this.courseToGenerateTitle = `for BS Information and Technology`;
    }
  }
}
