import { Component } from '@angular/core';

import { ThesisTitleGeneratorService } from '../thesis-title-generator.service'

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent {

  isHome: boolean = false;

  constructor(private thesisTitleGeneratorService: ThesisTitleGeneratorService) {
  };
}
