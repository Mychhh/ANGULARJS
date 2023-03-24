// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ClipboardModule } from 'ngx-clipboard';

// routes
import { RouterModule, Routes } from '@angular/router';

// service
import { ThesisTitleGeneratorService } from './thesis-title-generator.service';
import { ComputerITService } from './computer-it.service';

// component
import { ContainerComponent } from '../container/container.component'
import { NavigationComponent } from '../thesis-title-generator/navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { FieldsComponent } from './fields/fields.component';
import { CoursesComponent } from './fields/courses/courses.component';
import { CourseComponent } from './fields/course/course.component';
import { GenerateTitleComponent } from './generate-title/generate-title.component';
import { MadeWithLoveComponent } from './made-with-love/made-with-love.component';

const thesisTitleGeneratorRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FieldsComponent },
  { path: 'generate-title', component: GenerateTitleComponent },
]

@NgModule({
  declarations: [
    ContainerComponent,
    NavigationComponent,
    HeroComponent,
    FieldsComponent,
    CoursesComponent,
    CourseComponent,
    GenerateTitleComponent,
    MadeWithLoveComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(thesisTitleGeneratorRoutes),
    ClipboardModule,
  ],
  exports: [
    ContainerComponent,
    NavigationComponent,
    HeroComponent,
    FieldsComponent,
    GenerateTitleComponent,
    MadeWithLoveComponent,
  ],
  providers: [
    // ThesisTitleGeneratorService,
    // ComputerITService
  ]

})
export class ThesisTitleGeneratorModule { }
