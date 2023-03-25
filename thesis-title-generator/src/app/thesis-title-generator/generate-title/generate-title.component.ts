import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

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

  copyText: string = 'Copy'
  courseAcronym: string = '';
  courseToGenerateTitle: string = '';
  generatedThesisIdea: ThesisTitle = <ThesisTitle>{};

  constructor(private router: Router, private thesisTitleGeneratorService: ThesisTitleGeneratorService) { }

  ngOnInit(): void {
    this.courseAcronym = this.thesisTitleGeneratorService.chosenCourse;
    console.log(this.courseAcronym)
    //check if there is course selected 
    if (this.courseAcronym == '') {
      this.router.navigate(['/home'])
    }

    // functions
    this.clickCourseToGenerateTitle(this.courseAcronym);
    this.thesisTitleGeneratorService.getThesisTitleFromRandomComputer();


  }

  // functions
  clickCourseToGenerateTitle(courseToGenerateTitle: string): void {
    // switch case statement for identifying what course to generate
    switch (courseToGenerateTitle) {
      case ('IT'):
        this.courseToGenerateTitle = 'for BS in Information and Technology';
        this.generatedThesisIdea = this.thesisTitleGeneratorService.getThesisTitleFromIT();
        break;
      case ('CS'):
        this.courseToGenerateTitle = 'for BS in Computer Science';
        this.generatedThesisIdea = this.thesisTitleGeneratorService.getThesisTitleFromCS();
        break;
      case ('CpE'):
        this.courseToGenerateTitle = 'for BS in Computer Engineering';
        this.generatedThesisIdea = this.thesisTitleGeneratorService.getThesisTitleFromCpE();
        break;
      case ('IS'):
        this.courseToGenerateTitle = 'for BS in Information Systems';
        this.generatedThesisIdea = this.thesisTitleGeneratorService.getThesisTitleFromIS();
        break;
      case ('Computer Random'):
        this.courseToGenerateTitle = 'for Random Computer Course';
        this.generatedThesisIdea = this.thesisTitleGeneratorService.getThesisTitleFromRandomComputer();
        break;
      default:
        this.courseToGenerateTitle = 'Unknown';
        break;
    }

  }

  copy(thesisTitle: ThesisTitle): void {
    this.thesisTitleGeneratorService.copyToClipBoard(thesisTitle);
  }

}
