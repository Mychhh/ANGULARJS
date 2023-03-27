import { Injectable } from '@angular/core';

// Interface
import { Courses } from '../interface/Courses'
import { ThesisTitle } from '../interface/ThesisTitle';

// service 
import { ComputerITService } from '../thesis-title-generator/computer-it.service';
import { ComputerCsService } from './computer-cs.service';
import { ComputerCpeService } from './computer-cpe.service';
import { ComputerIsService } from './computer-is.service';
import { ComputerRandomService } from './computer-random.service'

// clipboard library
import { ClipboardService } from 'ngx-clipboard';

@Injectable({
  providedIn: 'root'
})

export class ThesisTitleGeneratorService {

  courses: Courses[] = [
    {
      course: 'IT',
      description: 'Bachelor of Science in Information Technology covers various aspects of computer science, information technology, and business management, preparing students for careers in IT and related fields.',
      img: 'assets/images/IT.jpg',
    },
    {
      course: 'CS',
      description: 'Bachelor of Science in Computer Science program teaches computer programming, algorithms, data structures, software engineering, databases, and computer networks.',
      img: 'assets/images/CS.jpg',
    },
    {
      course: 'CpE',
      description: 'Bachelor of Science in Computer Engineering combines computer science and electrical engineering principles to design and develop computer systems and networks.',
      img: 'assets/images/CPE.jpg',
    },
    {
      course: 'IS',
      description: 'Bachelor of Science in Information Science focuses on the study of information, its storage, retrieval, analysis, and application in various fields using technology and analytical skills.',
      img: 'assets/images/IS.jpg',
    },
    {
      course: 'Computer Random',
      description: 'Generate random thesis title among available computer courses',
      img: 'assets/images/Random.jpg',
    },
  ]

  chosenCourse: string = '';

  constructor(
    private computerITService: ComputerITService,
    private computerCsService: ComputerCsService,
    private computerCpeService: ComputerCpeService,
    private computerIsService: ComputerIsService,
    private computerRandomService: ComputerRandomService,
    private clipboardService: ClipboardService,
  ) { }

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

  // verify course to generate
  getWhatCourseToGenerate(particularCourse: string): void {
    particularCourse == '' ? this.handleChosenCourse('') : this.handleChosenCourse(particularCourse);
  }

  // handle value of course
  handleChosenCourse(course: string): void {
    this.chosenCourse = course;
  }

  // get thesis title from IT using a dependency service
  getThesisTitleFromIT(): ThesisTitle {
    return this.computerITService.getAThesisTitle();
  }
  // get thesis title from CS using a dependency service
  getThesisTitleFromCS(): ThesisTitle {
    return this.computerCsService.getAThesisTitle();
  }
  // get thesis title from CpE using a dependency service
  getThesisTitleFromCpE(): ThesisTitle {
    return this.computerCpeService.getAThesisTitle();
  }
  // get thesis title from IS using a dependency service
  getThesisTitleFromIS(): ThesisTitle {
    return this.computerIsService.getAThesisTitle();
  }
  // get thesis title from random computer using a dependency service
  getThesisTitleFromRandomComputer(): ThesisTitle {
    return this.computerRandomService.getRandomTitles();

  }
}
