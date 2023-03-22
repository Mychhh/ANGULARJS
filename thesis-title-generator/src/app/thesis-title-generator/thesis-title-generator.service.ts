import { Injectable } from '@angular/core';

// Interface
import { Courses } from '../interface/courses';

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

  constructor() { }

  getCourses() {
    return this.courses;
  }

}
