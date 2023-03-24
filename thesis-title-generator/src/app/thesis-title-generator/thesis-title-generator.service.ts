import { Injectable } from '@angular/core';

// Interface
import { Courses } from '../interface/Courses'
import { ThesisTitle } from '../interface/ThesisTitle';

// service 
import { ComputerITService } from '../thesis-title-generator/computer-it.service'

// clipboard library
import { ClipboardService } from 'ngx-clipboard';

@Injectable({
  providedIn: 'root'
})

export class ThesisTitleGeneratorService {

  courses: Courses[] = [
    {
      course: 'IT',
      description: 'Description about the course Lorem ipsum dolor sit amet consectetur. Feugiatest semp erpharetra volutpat et aultrices auctor eget. Ullamcorper nec morbi scelerisque.',
    },
    {
      course: 'CS',
      description: 'Description about the course Lorem ipsum dolor sit amet consectetur. Feugiatest semp erpharetra volutpat et aultrices auctor eget. Ullamcorper nec morbi scelerisque.',
    },
    {
      course: 'CpE',
      description: 'Description about the course Lorem ipsum dolor sit amet consectetur. Feugiatest semp erpharetra volutpat et aultrices auctor eget. Ullamcorper nec morbi scelerisque.',
    },
    {
      course: 'IS',
      description: 'Description about the course Lorem ipsum dolor sit amet consectetur. Feugiatest semp erpharetra volutpat et aultrices auctor eget. Ullamcorper nec morbi scelerisque.',
    },
    {
      course: 'Random',
      description: 'Description about the course Lorem ipsum dolor sit amet consectetur. Feugiatest semp erpharetra volutpat et aultrices auctor eget. Ullamcorper nec morbi scelerisque.',
    },
  ]

  chosenCourse: string = '';

  constructor(private computerITService: ComputerITService, private clipboardService: ClipboardService) { }

  // Copy
  copyToClipBoard(thesisTitle: ThesisTitle): void {
    // copy the title and description
    this.clipboardService.copy(
      `Title: ${thesisTitle.thesis_title} 

Description: ${thesisTitle.thesis_title_description}`);
  }
  changeCopySign(copySign: string): string {
    // const timeoutID = setTimeout(() => {
    // }, 1000);
    return copySign = 'Copy';
  }

  // get Computer Courses
  getComputerCourses(): Courses[] {
    return this.courses;
  }

  // choose what course to generate
  getWhatCourseToGenerate(particularCourse: string): void {

    // switch case statement for identifying what course to generate
    switch (particularCourse) {
      case ('IT'):
        this.handleChosenCourse(particularCourse);
        break;
      default:
        this.handleChosenCourse('');
        break;
    }

  }

  // handle value of course
  handleChosenCourse(course: string): void {
    this.chosenCourse = course;
  }

  // get thesis title from IT using a dependency service
  getThesisTitleFromIT(): ThesisTitle {
    return this.computerITService.getAThesisTitle();
  }

}
