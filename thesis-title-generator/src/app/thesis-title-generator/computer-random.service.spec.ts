import { TestBed } from '@angular/core/testing';

import { ComputerRandomService } from './computer-random.service';

describe('ComputerRandomService', () => {
  let service: ComputerRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
