// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component
import { NavigationComponent } from '../thesis-title-generator/navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { FieldsComponent } from './fields/fields.component';
import { CoursesComponent } from './fields/courses/courses.component';
import { CourseComponent } from './fields/course/course.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeroComponent,
    FieldsComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    HeroComponent,
    FieldsComponent
  ],
})
export class ThesisTitleGeneratorModule { }
