import { Component, Input } from '@angular/core';

// interface
import { Courses } from 'src/app/interface/Courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  //parent to child
  @Input() course: Courses = {} as Courses;
}
