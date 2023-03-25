import { Injectable } from '@angular/core';

// interface
import { ThesisTitle } from '../interface/ThesisTitle';

// service
import { ComputerITService } from './computer-it.service';
import { ComputerCsService } from './computer-cs.service'
import { ComputerCpeService } from './computer-cpe.service';
import { ComputerIsService } from './computer-is.service';

@Injectable({
  providedIn: 'root'
})
export class ComputerRandomService {

  titleIdeasForComputer: ThesisTitle[] = [];

  titleNumber: number = 0;

  constructor(
    private computerITService: ComputerITService,
    private computerCsService: ComputerCsService,
    private computerCpeService: ComputerCpeService,
    private computerIsService: ComputerIsService,
  ) {
    this.getAThesisTitle();
  }


  getAThesisTitle(): void {
    this.iterateTitles(this.computerITService.getAllTitleIdeas());
    this.iterateTitles(this.computerCsService.getAllTitleIdeas());
    this.iterateTitles(this.computerCpeService.getAllTitleIdeas());
    this.iterateTitles(this.computerIsService.getAllTitleIdeas());
  }

  iterateTitles(objectThesisTitle: ThesisTitle[]): void {
    for (let thesisTitle of objectThesisTitle) {
      this.titleIdeasForComputer.push(thesisTitle);
    }
  }

  getRandomTitles(): ThesisTitle {
    this.titleNumber = Math.floor((Math.random() * this.titleIdeasForComputer.length) + 1);
    return this.titleIdeasForComputer[this.titleNumber - 1];
  }

}
