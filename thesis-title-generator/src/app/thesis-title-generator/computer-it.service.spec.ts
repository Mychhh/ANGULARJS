import { TestBed } from '@angular/core/testing';

import { ComputerITService } from './computer-it.service';

describe('ComputerITService', () => {
  let service: ComputerITService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerITService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
