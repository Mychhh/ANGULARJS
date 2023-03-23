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
    this.courses = this.thesisTitleGeneratorService.getComputerCourses();
  }

  functionCourse(particularCourse: Courses): void {

    // choose what course to generate
    this.thesisTitleGeneratorService.getWhatCourseToGenerate(particularCourse.course);

    // navigate to generate title
    this.router.navigate(['/generate-title']);
  }

}

