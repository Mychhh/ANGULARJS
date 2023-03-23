import { Injectable } from '@angular/core';

// Interface
import { Courses } from '../interface/Courses'
import { ThesisTitle } from '../interface/ThesisTitle';

// service 
import { ComputerITService } from '../thesis-title-generator/computer-it.service'

import { Observable } from 'rxjs';

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

  // isInHome: boolean = true;

  constructor(private computerITService: ComputerITService) { }

  getCourses(): Courses[] {
    return this.courses;
  }

  handleChosenCourse(course: string): void {
    this.chosenCourse = course;
  }

  // get thesis title object from computer it services
  getThesisTitleFromIT(): ThesisTitle {
    return this.computerITService.getAThesisTitle();
  }

  // isInHomeObservable = new Observable((observer) => {
  //   observer.next(this.isInHome);
  // });

  // isInHomeFunction(ishome: boolean): void {

  //   this.isInHome = ishome;

  //   this.isInHomeObservable.subscribe((value) => {
  //     return value;
  //   });
  // }


}
