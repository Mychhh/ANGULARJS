import { TestBed } from '@angular/core/testing';

import { ThesisTitleGeneratorService } from './thesis-title-generator.service';

describe('ThesisTitleGeneratorService', () => {
  let service: ThesisTitleGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThesisTitleGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
