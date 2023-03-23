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
    this.courses = this.thesisTitleGeneratorService.getCourses();
  }

  clickToGenerate(): void {
    this.router.navigate(['/generate-title']);
  }

  courseClick(particularCourse: Courses): void {

    console.log(particularCourse);

    switch (particularCourse.course) {
      case ('IT'):
        this.thesisTitleGeneratorService.handleChosenCourse(particularCourse.course);
        break;
    }
  }

}
