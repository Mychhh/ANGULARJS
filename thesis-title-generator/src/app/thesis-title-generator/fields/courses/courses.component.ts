import { Component } from '@angular/core';
import { Courses } from 'src/app/interface/courses';

// service
import { ThesisTitleGeneratorService } from 'src/app/thesis-title-generator/thesis-title-generator.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {

  courses: Courses[] = [];

  constructor(private thesisTitleGeneratorService: ThesisTitleGeneratorService) {
    this.courses = this.thesisTitleGeneratorService.getCourses();

    console.log(this.courses);
  }


}
