import { Component } from '@angular/core';
import { Courses } from 'src/app/interface/Courses';
import { Router } from '@angular/router';

// service
import { ThesisTitleGeneratorService } from 'src/app/thesis-title-generator/thesis-title-generator.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {

  courses: Courses[] = [];

  constructor(private router: Router, private thesisTitleGeneratorService: ThesisTitleGeneratorService) {
    // gets computer course object to display in the options list
    this.courses = this.thesisTitleGeneratorService.getComputerCourses();
  }

  functionCourse(particularCourse: string): void {
    // console.log(particularCourse);
    this.thesisTitleGeneratorService.getWhatCourseToGenerate(particularCourse);
    this.router.navigate(['/generate-title']);
  }

}

